import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/db/repository/user.repository";
import { TimeGenerator } from "src/util/time-generator.service";
import { lastValueFrom, map } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { WeatherService } from "../forecast/weather.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BotService {
  private readonly timeGenerator = new TimeGenerator();

  constructor(
    private readonly userRepo: UserRepository,
    private readonly http: HttpService,
    private readonly weatherService: WeatherService,
    private readonly configService: ConfigService) {
  }

  async addChatId(data) {
    const chatId = data.message.chat.id;
    const existUser = await this.userRepo.findByChatId(chatId);
    if (!existUser) await this.userRepo.addChatId(chatId);
  }

  async setUserLocation(data): Promise<void> {
    const chatId = data.update.message.chat.id;
    const userLocation = data.update.message["location"];
    await this.userRepo.setUserLocationToDb(chatId, userLocation);
  }

  async setUserTime(data) {
    const chatId = data.update.message.chat.id;
    const user = await this.userRepo.findByChatId(chatId);
    if (user.location["longitude"] === undefined)
      throw new Error("Please set location");

    const time = data.update.message.text;
    const testTimeIfLegal = /^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/.test(time);
    if (!testTimeIfLegal) throw new Error("Time is not correct");

    const latitude = user.location["latitude"];
    const longitude = user.location["longitude"];
    const convertedTime = await this.timeGenerator.generateTime(
      latitude,
      longitude,
      time
    );
    await this.userRepo.setUserTime(chatId, convertedTime);
  }

  async response(currentTime) {
    const matchedTime = await this.userRepo.findTimeMatch(currentTime);
    if (matchedTime.length > 0) {
      matchedTime.map(async chat => {
        const forecast = await this.weatherService.getWeather(chat.location);
        await this.sendMessage(chat.chatId, forecast);
      });
    }
  }

  async sendMessage(chatId, weatherResponse) {
    const TELEGRAM_API = this.configService.get("TELEGRAM_API");
    return lastValueFrom(this.http.post(`https://api.telegram.org/bot${TELEGRAM_API}/sendMessage`, {
      text: weatherResponse.weather[0].description,
      chat_id: chatId
    }).pipe(map(res => res.data)));
  }

}

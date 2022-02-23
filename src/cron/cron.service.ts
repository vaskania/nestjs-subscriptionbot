import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import * as moment from "moment-timezone";
import { UserRepository } from "../db/repository/user.repository";
import { WeatherService } from "../forecast/weather.service";
import { lastValueFrom, map } from "rxjs";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class TasksService {
  constructor(private readonly userRepo: UserRepository, private readonly weatherService: WeatherService, private readonly http: HttpService) {
  }

  @Cron("0 * * * * *")
  async handleCron() {
    const currentTime = moment(new Date()).format("HH:mm");
    const match = await this.userRepo.findTimeMatch(currentTime);
    const latitude = match[0].location["latitude"];
    const longitude = match[0].location["longitude"];
    const amind = await this.weatherService.getWeather(latitude, longitude);

    return lastValueFrom(this.http.post("https://api.telegram.org/bot5145218551:AAGYg-E7eBTBmvMGeIIiNXhHI2hShEbrLMw/sendMessage", {
      text: "weather responses",
      chat_id: 369704871
    }).pipe(map(res => res.data)));
  }
}



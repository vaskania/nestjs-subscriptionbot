import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom, map } from "rxjs";
import { ConfigService } from "@nestjs/config";


@Injectable()
export class WeatherService {
  constructor(private http: HttpService, private readonly configService: ConfigService) {
  }

  setUrl = (location) => {
    const WEATHER_API = this.configService.get("WEATHER_API");
    const { latitude, longitude } = location;
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API}&units=metric`;
  };

  getWeather(location) {
    return lastValueFrom(this.http.get((this.setUrl(location))).pipe(map(res => res.data)));
  }
}
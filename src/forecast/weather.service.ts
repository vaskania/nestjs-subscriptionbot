import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom, map } from "rxjs";

const API = "64f266fb3ffa0f2b1da717bf3720157e";

@Injectable()
export class WeatherService {
  constructor(private http: HttpService) {
  }

  setUrl = (latitude, longitude) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  };

  getWeather(lat: number, long: number) {
    return lastValueFrom(this.http.get((this.setUrl(lat, long))).pipe(map(res => res.data)));
  }
}
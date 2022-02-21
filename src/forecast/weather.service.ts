import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";

const API = "64f266fb3ffa0f2b1da717bf3720157e";

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {
  }

  setUrl = (latitude, longitude) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  };



  // findAll(): Observable<AxiosResponse<Cat[]>> {
  //   return this.httpService.get(this.setUrl());
  // }
}
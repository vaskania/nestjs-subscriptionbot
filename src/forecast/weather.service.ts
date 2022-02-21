import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {
  }
  //
  // uri = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API}&units=metric`;
  //
  // findAll(): Observable<AxiosResponse<Cat[]>> {
  //   return this.httpService.get(this.uri);
  // }
}
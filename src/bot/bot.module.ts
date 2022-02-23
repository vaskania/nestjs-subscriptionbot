import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { HttpModule } from "@nestjs/axios";
import { WeatherService } from "../forecast/weather.service";

@Module({
  imports: [DbModule, HttpModule],
  providers: [WeatherService]
})
export class BotModule {
}

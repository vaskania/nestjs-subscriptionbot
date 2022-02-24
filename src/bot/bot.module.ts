import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { HttpModule } from "@nestjs/axios";
import { WeatherService } from "../forecast/weather.service";
import { BotService } from "./bot.service";

@Module({
  imports: [DbModule, HttpModule],
  providers: [BotService, WeatherService],
  exports: [BotService]
})
export class BotModule {
}

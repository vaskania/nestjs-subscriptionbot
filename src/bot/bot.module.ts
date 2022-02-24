import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { HttpModule } from "@nestjs/axios";
import { BotService } from "./bot.service";
import { WeatherModule } from "../forecast/weather.module";

@Module({
  imports: [DbModule, HttpModule, WeatherModule],
  providers: [BotService],
  exports: [BotService]
})
export class BotModule {
}

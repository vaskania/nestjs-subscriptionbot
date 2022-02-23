import { Module } from "@nestjs/common";
import { DbModule } from "src/db/db.module";
import { BotController } from "./bot.controller";
import { BotService } from "./bot.service";
import { HttpModule } from "@nestjs/axios";
import { WeatherService } from "../forecast/weather.service";

@Module({
  imports: [DbModule, HttpModule],
  controllers: [BotController],
  providers: [BotService, WeatherService]
})
export class BotModule {
}

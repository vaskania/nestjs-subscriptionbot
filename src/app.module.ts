import "dotenv/config";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TelegrafModule } from "nestjs-telegraf";
import { DbModule } from "./db/db.module";
import { BotModule } from "./bot/bot.module";
import { BotController } from "./bot/bot.controller";
import { BotService } from "./bot/bot.service";
import { ScheduleModule } from "@nestjs/schedule";
import { TasksService } from "./cron/cron.service";
import { WeatherModule } from "./forecast/weather.module";
import { WeatherService } from "./forecast/weather.service";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

const DB = process.env.DB_URI;
const TOKEN = process.env.TELEGRAM_API;

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(DB),
    TelegrafModule.forRoot({
      token: TOKEN
    }),
    DbModule,
    BotModule,
    ScheduleModule.forRoot(),
    WeatherModule,
    HttpModule
  ],
  providers: [BotService, BotController, TasksService, WeatherService]
})
export class AppModule {
}

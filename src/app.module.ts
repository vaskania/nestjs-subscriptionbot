import 'dotenv/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TelegrafModule } from 'nestjs-telegraf';
import { DbModule } from './db/db.module';
import { BotModule } from './bot/bot.module';
import { BotController } from './bot/bot.controller';
import { BotService } from './bot/bot.service';

const DB = process.env.DB_URI;
const TOKEN = process.env.TELEGRAM_API;

@Module({
  imports: [
    MongooseModule.forRoot(DB),
    TelegrafModule.forRoot({
      token: TOKEN,
    }),
    DbModule,
    BotModule,
  ],
  providers: [BotService, BotController],
})
export class AppModule {}

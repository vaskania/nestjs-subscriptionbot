import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import * as moment from "moment-timezone";
import { BotService } from "../bot/bot.service";

@Injectable()
export class TasksService {
  constructor(
    private readonly botService: BotService
  ) {
  }

  @Cron("0 * * * * *")
  async handleCron() {
    const currentTime = moment(new Date()).format("HH:mm");
    await this.botService.response(currentTime);
  }
}



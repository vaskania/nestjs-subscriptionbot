import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import * as moment from "moment-timezone";
import { UserRepository } from "../db/repository/user.repository";

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly userRepo: UserRepository) {
  }

  @Cron("0 * * * * *")
  async handleCron() {
    const currentTime = moment(new Date()).format("HH:mm");
    const match = await this.userRepo.findTimeMatch(currentTime);
    console.log(match);
  }
}
import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/db/repository/user.repository';

@Injectable()
export class BotService {
  constructor(private readonly userRepo: UserRepository) {}

  async addChatId(ctx) {
    const existUser = await this.userRepo.findChatId(ctx.message.chatId);
    if (!existUser) await this.userRepo.addChatId(ctx.message.chatId);
    return;
  }

  async setUserLocation(ctx): Promise<void> {
    // await this.userRepo.setUserLocationToDb(ctx);
  }
}

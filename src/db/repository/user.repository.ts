import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../interface/user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('user')
    private readonly userModel: Model<User>,
  ) {}

  async findByChatId(chatId: string) {
    return this.userModel.findOne({ chatId });
  }

  async addChatId(chatId: string) {
    const newUserChatId = new this.userModel({ chatId });
    return newUserChatId.save();
  }

  async setUserLocationToDb(chatId, userLocation) {
    await this.userModel.findOneAndUpdate(
      { chatId },
      { location: userLocation },
    );
  }

  async setUserTime(chatId, schedule) {
    await this.userModel.findOneAndUpdate({ chatId }, { schedule });
  }
}

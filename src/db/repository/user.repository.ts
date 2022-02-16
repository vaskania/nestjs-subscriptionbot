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

  async findChatId(chatId: string) {
    return this.userModel.find({ chatId });
  }

  async addChatId(chatId: string) {
    return new this.userModel(chatId);
  }

  async setUserLocationToDb() {}
}

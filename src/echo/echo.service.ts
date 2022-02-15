import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { TelegrafContext } from '../interface/telegraf-context.interface';

@Injectable()
export class EchoService {
  constructor(@InjectBot() private bot: Telegraf) {}
}

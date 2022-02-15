import { Injectable } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf, Context } from 'telegraf';

@Injectable()
export class EchoService {
  constructor(@InjectBot() private bot: Telegraf<Context>) {}
}

import { Update, Start, On } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { MessageGenerator } from '../bot/message-generator';
import { BotService } from './bot.service';

@Update()
export class BotController {
  private readonly messageGenerator = new MessageGenerator();
  constructor(private readonly botService: BotService) {}
  @Start()
  async start(ctx: Context) {
    await this.botService.addChatId(ctx);
    await ctx.reply('Request location', {
      reply_markup: this.messageGenerator.generateReplyMarkupMessage(),
    });
  }

  @On('location')
  async on(ctx: Context) {
    await this.botService.setUserLocation(ctx);
    await ctx.reply('Please add time for subscription HH/MM');
  }

  @On('message')
  async setTime(ctx: Context) {
    try {
      await this.botService.setUserTime(ctx);

      ctx.reply(`Time setted at: ${ctx.update['message'].text}`);
    } catch (error) {
      ctx.reply(error.message);
    }
  }
}

import { Update, Ctx, Start, On, InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { MessageGenerator } from '../bot/message-generator';

@Update()
export class BotController {
  private readonly messageGenerator = new MessageGenerator();
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply('Request location', {
      reply_markup: this.messageGenerator.generateReplyMarkupMessage(),
    });
  }

  @On('location')
  async on(@Ctx() ctx: Context) {
    const userLocation = ctx.message['location'];
    // await setUserLocation()
    await ctx.reply('👍');
  }
}

import { Update, Ctx, Start, Help, On, Hears } from 'nestjs-telegraf';
import { TelegrafContext } from './interface/telegraf-context.interface';

@Update()
export class AppUpdate {
  @Start()
  async start(@Ctx() ctx) {
    await ctx.reply('Welcome');
  }

  //   @Help()
  //   async help(@Ctx() ctx: TelegrafContext) {
  //     await ctx.reply('Send me a sticker');
  //   }

  //   @On('sticker')
  //   async on(@Ctx() ctx: TelegrafContext) {
  //     await ctx.reply('👍');
  //   }

  //   @Hears('hi')
  //   async hears(@Ctx() ctx: TelegrafContext) {
  //     await ctx.reply('Hey there');
  //   }
}

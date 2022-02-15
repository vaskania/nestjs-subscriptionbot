import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '5145218551:AAGYg-E7eBTBmvMGeIIiNXhHI2hShEbrLMw',
    }),
  ],
  providers: [AppUpdate],
})
export class AppModule {}

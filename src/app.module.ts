import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '5145218551:AAGYg-E7eBTBmvMGeIIiNXhHI2hShEbrLMw',
    }),
  ],
})
export class AppModule {}

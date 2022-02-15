import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { getBotToken } from 'nestjs-telegraf';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  // const bot = app.get(getBotToken());  // webhooks
}
bootstrap();

import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';

@Module({
  imports: [DbModule],
  controllers: [BotController],
  providers: [BotService],
})
export class BotModule {}

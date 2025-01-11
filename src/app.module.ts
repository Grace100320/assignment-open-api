import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GneewsService } from './gneews/gneews.service';
import { GneewsController } from './gneews/gneews.controller';

@Module({
  imports: [],
  controllers: [AppController, GneewsController],
  providers: [AppService, GneewsService],
})
export class AppModule {}

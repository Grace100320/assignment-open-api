import { Controller, Get, Query } from '@nestjs/common';
import { GneewsService } from './gneews.service';

@Controller('gnews')
export class GneewsController {
  constructor(private readonly gneewsService: GneewsService) {}

  @Get('top-headlines')
  async getTopHeadlines(@Query('lang') lang: string) {
    return this.gneewsService.getTopHeadlines(lang);
  }

  @Get('search')
  async searchNews(@Query('q') query: string, @Query('lang') lang: string) {
    return this.gneewsService.searchNews(query, lang);
  }
}


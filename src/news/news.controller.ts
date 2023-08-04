import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './schemas/news.schema';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async findAll(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @Get(':type')
  getByType(@Param('type') type: string) {
    return this.newsService.getNewsByType(type);
  }

  @Post('/new')
  async createNew() {
    return this.newsService.createNew();
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.newsService.delete(id);
  }
}

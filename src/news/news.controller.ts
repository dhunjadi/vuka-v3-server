import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { News } from './schemas/news.schema';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateNewsDto } from './dto/create-news-dto';

@Controller('news')
@UseGuards(JwtAuthGuard)
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
  async createNew(@Body() data: CreateNewsDto) {
    return this.newsService.createNew(data);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.newsService.delete(id);
  }

  @Put('edit/:id')
  async updateItem(@Param('id') id: string, @Body() updateData: any) {
    return this.newsService.updateNews(id, updateData);
  }
}

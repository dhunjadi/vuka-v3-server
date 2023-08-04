import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './schemas/news.schema';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news-dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<News>,
  ) {}

  async findAll(): Promise<News[]> {
    return this.newsModel.find();
  }

  async getNewsByType(type: string): Promise<News[]> {
    return this.newsModel.find({ type });
  }

  async createNew(): Promise<News> {
    return await this.newsModel.create(new CreateNewsDto());
  }

  async delete(id: string) {
    return await this.newsModel.findByIdAndRemove({ _id: id });
  }
}

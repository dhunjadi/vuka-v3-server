import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { News } from './schemas/news.schema';
import { Model } from 'mongoose';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<News>,
  ) {}

  async findAll(): Promise<News[]> {
    return this.newsModel.find().exec();
  }

  async getNewsByType(type: string): Promise<News[]> {
    return this.newsModel.find({ type }).exec();
  }
}

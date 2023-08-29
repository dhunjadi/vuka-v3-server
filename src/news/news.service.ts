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

  async getNewsByType(type: string, userRole: string): Promise<News[]> {
    if (userRole === 'student') {
      return this.newsModel.find({ type, isPublished: true });
    }
    return this.newsModel.find({ type });
  }

  async createNew(data: CreateNewsDto): Promise<News> {
    return await this.newsModel.create(data);
  }

  async delete(id: string) {
    return await this.newsModel.findByIdAndRemove({ _id: id });
  }

  async updateNews(id: string, updateData: any) {
    return this.newsModel.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
    });
  }
}

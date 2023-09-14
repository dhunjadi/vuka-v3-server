import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private readonly newsModel: Model<Task>,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.newsModel.find();
  }
}

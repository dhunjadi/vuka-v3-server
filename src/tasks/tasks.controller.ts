import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TasksService } from './tasks.service';
import { Task } from './schemas/task.schema';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly newsService: TasksService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    return this.newsService.findAll();
  }
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  type: string;

  @Prop()
  subject: string;

  @Prop()
  year: string;

  @Prop()
  isPublished: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);

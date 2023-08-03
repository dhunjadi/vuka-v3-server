import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  type: string;

  @Prop()
  isPublished: boolean;
}

export const NewsSchema = SchemaFactory.createForClass(News);

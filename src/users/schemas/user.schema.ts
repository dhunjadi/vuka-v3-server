import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  fName: string;

  @Prop()
  lName: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  imgSrc: string;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

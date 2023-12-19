import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  _id: UUID;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  portfolio: string;
  @Prop({ required: true })
  frontEndSkills: string[];
  @Prop({ required: true })
  backEndSkills: string[];
  @Prop({ required: true })
  techSkills: string[];
  @Prop({ required: true })
  softSkills: string[];
}

export const userSchema = SchemaFactory.createForClass(User);

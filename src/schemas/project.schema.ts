import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop()
  _id: UUID;
  @Prop({ required: true })
  img: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  technologies: string[];
  @Prop({ required: true })
  url: string;
  @Prop({ required: true })
  pin: boolean;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);

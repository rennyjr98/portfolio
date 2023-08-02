import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SocialMediaDocument = HydratedDocument<SocialMedia>;

@Schema()
export class SocialMedia {
  @Prop({ required: true })
  _id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  url: string;
}

export const socialMediaSchema = SchemaFactory.createForClass(SocialMedia);

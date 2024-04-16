import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { HydratedDocument } from "mongoose";

export type UpdatesDocument = HydratedDocument<Updates>;

@Schema()
export class Updates {
  @Prop()
  _id: UUID;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop()
  publishedTime: string;
}

export const updatesSchema = SchemaFactory.createForClass(Updates);
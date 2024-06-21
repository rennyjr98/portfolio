import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UUID } from "crypto";
import { HydratedDocument } from "mongoose";

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema()
export class Experience {
  @Prop()
  _id: UUID;
  @Prop()
  img: string;
  @Prop()
  tech: string;
  @Prop()
  details: string;
  @Prop()
  mainStack: boolean;
  @Prop()
  category: string;
  @Prop()
  yearsOfExperience: number;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
import mongoose from 'mongoose';

export interface ProjectDto {
  _id?: string;
  img?: string;
  name?: string;
  description?: string;
  technologies?: string[];
  url?: string;
  pin?: boolean;
  user?: mongoose.Schema.Types.ObjectId;
}

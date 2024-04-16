import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { randomUUID } from "crypto";
import { Model } from "mongoose";
import { ExperienceDto } from "src/schemas/dtos/experience.dto";
import { Experience } from "src/schemas/experience.schema";

@Injectable()
export class ExperienceService {
  private n: number = 0;
  constructor(@InjectModel(Experience.name) private experienceModel: Model<Experience>) {}

  private getDto(experience: Experience): ExperienceDto {
    return {
      img: experience.img,
      tech: experience.tech,
      details: experience.details,
      mainStack: !!experience.mainStack,
      yearsOfExperience: experience.yearsOfExperience,
    } as ExperienceDto;
  }

  async create(experience: ExperienceDto) {
    const exp = new this.experienceModel({
      _id: randomUUID(),
      ...experience,
      mainStack: !!experience.mainStack,
    });
    const saved = await exp.save();
    return this.getDto(saved);
  }

  async getAll() {
    const experiences: Experience[] = await this.experienceModel.find().exec();
    const experiencesDto: ExperienceDto[] = [];
    experiences.forEach(document => {
      experiencesDto.push(this.getDto(document));
    });
    experiencesDto.sort((exp1: ExperienceDto, exp2: ExperienceDto) => {
      const exp1BoolNumber = exp1.mainStack ? 1 : 0;
      const exp2BoolNumber = exp2.mainStack ? 1 : 0;
      return exp2BoolNumber - exp1BoolNumber;
    });
    return experiencesDto;
  }
}
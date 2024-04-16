import { Body, Controller, Get, Post } from "@nestjs/common";
import { ExperienceDto } from "src/schemas/dtos/experience.dto";
import { ExperienceService } from "src/services/experience.service";

@Controller('experience')
export class ExperienceController {
  constructor(private experienceService: ExperienceService) {}

  @Post()
  create(@Body() experience: ExperienceDto): Promise<ExperienceDto> {
    return this.experienceService.create(experience);
  }

  @Get()
  getAll(): Promise<ExperienceDto[]> {
    return this.experienceService.getAll();
  }
}
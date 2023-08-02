import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UUID } from 'crypto';
import { ProjectDto } from 'src/schemas/dtos/project.dto';
import { Project } from 'src/schemas/project.schema';
import { ProjectService } from 'src/services/project.service';

@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Post()
  async create(@Body() projectDto: ProjectDto) {
    return this.projectService.create(projectDto);
  }
  @Get()
  async findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }
  @Get(':id')
  async findById(@Param() params: any): Promise<Project> {
    console.log(params);
    return this.projectService.findById(params.id as UUID);
  }
  @Post('query')
  async findByQuery(@Body() projectDto: ProjectDto): Promise<Project[]> {
    return this.projectService.findByQuery(projectDto);
  }
  @Delete(':id')
  async deleteById(@Param() params: any) {
    return this.projectService.delete(params.id as UUID);
  }
}

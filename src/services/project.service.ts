import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UUID, randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { ProjectDto } from 'src/schemas/dtos/project.dto';
import { Project } from 'src/schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async create(projectDto: ProjectDto) {
    projectDto._id = randomUUID();
    const project = new this.projectModel(projectDto);
    return project.save();
  }

  async findById(id: UUID): Promise<Project> {
    return this.projectModel.findById(id).exec();
  }

  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }

  async findByQuery(projectDto: ProjectDto): Promise<Project[]> {
    return this.projectModel.find(this.genModelQuery(projectDto)).exec();
  }

  private genModelQuery(projectDto: ProjectDto) {
    const query = {
      name: { $regex: projectDto.name, $options: 'i' },
      technologies: {
        $in: projectDto.technologies?.map((p) => p.toLowerCase()),
      },
    };
    if (!projectDto.name) {
      delete query.name;
    }
    if (!projectDto.technologies || projectDto.technologies.length === 0) {
      delete query.technologies;
    }
    return query;
  }

  async delete(id: UUID) {
    return this.projectModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}

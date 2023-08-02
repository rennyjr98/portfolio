import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UUID, randomUUID } from 'crypto';
import { Model } from 'mongoose';
import { UserDto } from 'src/schemas/dtos/user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  private parseToDto(user: User): UserDto {
    return {
      _id: user._id,
      username: user.username,
      frontEndSkills: user.frontEndSkills,
      backEndSkills: user.backEndSkills,
      techSkills: user.techSkills,
      softSkills: user.softSkills,
    };
  }

  async create(userDto: UserDto): Promise<UserDto> {
    userDto._id = randomUUID();
    const user = new this.userModel(userDto);
    const saved = await user.save();
    return this.parseToDto(saved);
  }

  async logIn(userDto: UserDto) {
    const user: User[] = await this.userModel
      .find({
        username: userDto.username,
        password: userDto.password,
      })
      .exec();
    return this.parseToDto(user[0]);
  }

  async findById(id: UUID): Promise<UserDto> {
    const user: User = await this.userModel.findById(id).exec();
    return this.parseToDto(user);
  }
}

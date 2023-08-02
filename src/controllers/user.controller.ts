import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UUID } from 'crypto';
import { UserDto } from 'src/schemas/dtos/user.dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }
  @Post('login')
  logIn(@Body() userDto: UserDto) {
    return this.userService.logIn(userDto);
  }
  @Get(':id')
  getById(@Param() param: any): Promise<UserDto> {
    return this.userService.findById(param.id as UUID);
  }
}

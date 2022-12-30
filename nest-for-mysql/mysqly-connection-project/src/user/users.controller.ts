import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { createUserDto } from '../DTO/user.dto';
import { UsersService } from './users.service';

@Controller('/user')
export class UserController {
  constructor(private readonly appService: UsersService) {}

  @Get()
  getUserDetails() {
    return this.appService.getUser();
  }

  @Get(':id')
  getUserOne(id: number) {
    return this.appService.getUserOne(id);
  }

  @Post()
  createUser(@Body() userDTO: createUserDto) {
    this.appService.createUser(userDTO);
    return { statusCode: 201, message: 'Created successfully ' };
  }

  @Patch()
  updateUser(@Body() userDto: createUserDto, @Param() id: number) {
    this.appService.updateUser(userDto, id);
    return { statusCode: 201, message: 'Updated Successfully ' };
  }
}

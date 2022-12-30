import { 
  Controller, 
  Get, 
  InternalServerErrorException, 
  Post, 
  Req, 
  Res, 
  Body, 
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user-dto';
import { Request, Response } from 'express';
import { UserInterface } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getHello(): Promise<UserInterface[]> {
      //throw new InternalServerErrorException();
    return this.userService.findAll();
    //return 'Get All Items, Come from userController';
  }

  @Get('/demoForReq')
    findAll(@Req() req: Request, @Res() res:Response): Response{
      console.log(req.url);
      return res.send('called api using req and res')
    }

  @Get(':id')
  //findOne(@Param() Param): string{
    async findOne(@Param('id') id): Promise<UserInterface> {
     //return `Name:${id}`
    //return `ID : ${Param.id}`
    return this.userService.findOne(id)
  }

  @Post('/')
  postHello(@Body() CreateUserDto:CreateUserDto): string {
    //throw new InternalServerErrorException();
    // return this.userService.postHello();
    return `NAME: ${CreateUserDto.name} DESIGNATION:${CreateUserDto.designation} AGE ${CreateUserDto.age}`
  }

  @Delete(':id')
  deleteHelo(@Param('id') id ): string{
    return `Delete ${id}`;
  }

  @Put(':id')
  updateHello(@Body() updateUserDto: CreateUserDto, @Param('id') id): string{
    return `Update ${id} - Name: ${updateUserDto.name}`
  }
}

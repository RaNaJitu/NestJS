
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
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { CreateUserDto } from './user/dto/create-user-dto';
import { Request, Response } from 'express';
import { UserInterface } from './user/interfaces/user.interface';
@Controller('/main')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/demoForReq')
    findAll(@Req() req: Request, @Res() res:Response): Response{
      console.log(req.url);
      return res.send('called api using req and res')
    }
}
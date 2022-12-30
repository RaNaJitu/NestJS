import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../../auth/decorator/role.decorator';
import { UserPermissions } from '../../auth/decorator/role.enum';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { FilterTagDto } from '../tag/dto/FilterTagDto';
import { TagService } from '../tag/tag.service';
import { createUserDto } from './dto/create.user.dto';
import { loginUserDto } from './dto/login.user.dto';
import { UserService } from './user.service';
// import { AuthService } from '../../auth/auth.service';
// import RequestWithUser from '../../auth/requestWithUser.interface';
// import bcrypt from '@types/bcrypt';
// import bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly tagService: TagService, // private readonly AuthService: AuthService,
  ) {}

  @Get()
  async getTag() {
    console.log('-------user controller--');
    return await this.userService.getUser();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserPermissions.READ)
  @Get('/tag')
  async getTags(@Query() query: FilterTagDto) {
    return await this.tagService.getTags(query);
  }

  @Post()
  async createUser(@Body() payload: createUserDto) {
    await this.userService.createUser(payload);
    return {
      message: 'User created successfully',
      statusCode: HttpStatus.CREATED,
      user: payload,
    };
  }

  @Post('login')
  // async login(@Req() request: RequestWithUser, @Res() response: Response) {
  async login(@Body() payload: loginUserDto) {
    // const { user } = request;
    // const cookie = this.AuthService.getCookieWithJwtToken(user.id);
    // response.setHeader('Set-Cookie', cookie);
    // user.password = undefined;
    // return response.send(user);
    const data = await this.userService.loginUser(payload);
    return {
      message: 'User Login successfully',
      statusCode: HttpStatus.CREATED,
      Token: data,
    };
  }
}

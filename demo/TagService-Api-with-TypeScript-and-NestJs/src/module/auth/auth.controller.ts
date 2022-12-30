import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  UnauthorizedException,
  Patch,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/role.guard';
import { CreateUserDTO } from '../user/dtos/createUser.dto';
import { UserLoginDTO } from '../user/dtos/loginUser.dto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { UserPermissions } from './enums/role.enum';
import { Roles } from './enums/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/register')
  async register(@Body() createUserDTO: CreateUserDTO) {
    console.log('----------------Register Successfully---------');
    const user = await this.userService.addUser(createUserDTO);
    console.log(user);
    return user;
  }

  @Post('/login')
  async login(@Body() payload: UserLoginDTO) {
    console.log('----------------Login Successfully---------');
    const user = await this.authService.login(payload);
    return user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserPermissions.READ)
  @Get('/user')
  getUser(@Request() req) {
    console.log(req.user);
    return req.user;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserPermissions.CREATE)
  @Post('/demo')
  create() {
    return 'create post successFully';
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserPermissions.DELETE)
  @Delete('/tag')
  delete() {
    return 'post Deleted successFully';
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserPermissions.UPDATE)
  @Patch('/tags')
  update() {
    return 'post updated successFully';
  }
}

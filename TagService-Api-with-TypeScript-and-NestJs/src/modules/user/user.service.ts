import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { resolveObjectURL } from 'buffer';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create.user.dto';
import { loginUserDto } from './dto/login.user.dto';
import UserEntity from './entity/user.entity';
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private JwtServices: JwtService,
  ) {}

  async getUser() {
    console.log('-------getUser called');
    // const tag = await this.TagEntity.findOne({ where: { id: parseInt(id) } });
    const user = await this.userEntity.findAndCount();
    return user;
  }

  async createUser(payload: createUserDto) {
    try {
      const UserExist = this.isUserExist(payload);

      if (!UserExist) {
        const hashedPassword = await bcrypt.hash(payload.password, 10);

        await this.userEntity.create({
          ...payload,
          password: hashedPassword,
        });
      }
      throw new ConflictException();
    } catch (error) {
      console.log('--error---', error);
      if (error?.status === 409) {
        throw new ConflictException('User with that email already exists');
      }
      throw new InternalServerErrorException('Something Went Wrong');
    }
  }

  public async isUserExist(payload) {
    return await this.userEntity.findOne({
      where: { email: payload.email },
    });
  }

  async loginUser(payload: loginUserDto) {
    try {
      // checking user Exit or not
      const UserExist = await this.isUserExist(payload);
      if (!UserExist) {
        throw new BadRequestException('Email is Wrong');
      }
      console.log('---UserExist------', UserExist);
      // Checking Password is correct or not
      const isPasswordMatching = await bcrypt.compare(
        payload.password,
        UserExist.password,
      );
      if (!isPasswordMatching) {
        throw new HttpException('Wrong Password', HttpStatus.BAD_REQUEST);
      }

      const jwt = await this.JwtServices.signAsync({ id: UserExist });
      console.log('---JWT---', jwt);
      return jwt;
      //Generate Tokens
      // throw new ConflictException();
    } catch (error) {
      console.log('--error---', error);
      if (error?.status === 409) {
        throw new ConflictException('User with that email already exists');
      }
      throw new InternalServerErrorException('Something Went Wrong');
    }
  }
}

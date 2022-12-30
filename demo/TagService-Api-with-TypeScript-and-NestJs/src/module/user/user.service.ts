import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import * as bcrypt from 'bcrypt';
import UsersEntity from './Entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersEntity: Repository<UsersEntity>,
  ) {}

  async addUser(createUserDTO: CreateUserDTO) {
    const newUser = await this.usersEntity.create(createUserDTO);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    newUser.userPermission = JSON.stringify(createUserDTO?.userPermission);
    return this.usersEntity.save(newUser);
  }

  async findUser(username: string): Promise<UsersEntity | undefined> {
    const user = await this.usersEntity.findOne({ where: { username } });
    return user;
  }
}

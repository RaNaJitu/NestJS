import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUser() {
    return this.usersRepository.find();
  }

  getUserOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  createUser(bodyProfile) {
    return this.usersRepository.save(bodyProfile);
  }

  updateUser(bodyProfile, id) {
    return this.usersRepository.update(bodyProfile, id);
  }
}

import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectConnection,InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('UserInterface')  private readonly userModel:Model<UserInterface>){}
  getHello(): string {
    return 'Hello World! this is written in services';
  }

  postHello(): string {
    return 'PostHello method is called'
  }
  private readonly items: UserInterface[] = [
    {
      id:"878787",
      name: "mera Naam ye hai",
      designation: "me ye kaam krata hu",
      age: 12112
    },
    {
      id:"989898",
      name:"me wo kaam krta hu",
      designation:"Mera Naam wo hai",
      age:1234
    }
  ]

  async findAll(): Promise<UserInterface[]>{
    // return this.items
    return await this.userModel.find()
  }

  async findOne(id: string): Promise<UserInterface> {
    //return this.items.find(UserInterface => this.items);
    return await this.userModel.findOne({_id: id });
  }
}
import { Injectable } from '@nestjs/common';
import { item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { retry } from 'rxjs';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<item>) {}
  //   private readonly items: item[] = [
  //     {
  //       id: '1234567890',
  //       name: 'jitu',
  //       description: 'I am Hero',
  //       qty: 1212,
  //     },
  //     {
  //       id: '1234567891',
  //       name: 'jitu1',
  //       description: 'I am Hero1',
  //       qty: 1212,
  //     },
  //     {
  //       id: '1234567892',
  //       name: 'jitu2',
  //       description: 'I am Hero2',
  //       qty: 1212,
  //     },
  //   ];

  //   findAll(): item[] {
  //     return this.items;
  //   }

  //   findOne(id: string): item {
  //     return this.items.find((item) => item.id === id);
  //   }

  async findAll(): Promise<item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: item): Promise<item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async update(id: string, item: item): Promise<item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
}

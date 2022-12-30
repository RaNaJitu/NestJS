import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
  Query,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';
import { ItemService } from './item.service';
import { item } from './interfaces/item.interface';
@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}
  @Get()
  async findAll(): Promise<item[]> {
    // return 'my name is jitu kumar';
    return this.itemService.findAll();
  }
  //! this is used just like node JS syntax in Nest JS we can use like node JS
  //   @Get()
  //   findAll(@Req() req: Request, @Res() res: Response): Response {
  //     console.log(req.url);
  //     return res.send('Get Function is called by using the express');
  //   }

  @Get(':id')
  async findOne(@Param() param, @Query() query): Promise<item> {
    // return `Item ${param.id} Query:${query.id}`;
    return this.itemService.findOne(param.id);
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<item> {
    // return `name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    return this.itemService.create(createItemDto);
  }

  @Put(':id')
  update(
    @Body() updatedItemDto: CreateItemDto,
    @Param('id') id,
  ): Promise<item> {
    // return `Id: ${id} Name: ${updatedItemDto.name} \n Desc: ${updatedItemDto.description}`;
    return this.itemService.update(id, updatedItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<item> {
    // return `Deleted Id : ${id}`;
    return this.itemService.delete(id);
  }
}

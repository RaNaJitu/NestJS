import {
  Body,
  Controller,
  Post,
  Get,
  HttpStatus,
  Query,
  Delete,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../guards/jwt.guard';
import { RolesGuard } from '../../guards/role.guard';
import { UserPermissions } from '../auth/enums/role.enum';
import { Roles } from '../auth/enums/roles.decorator';
import { createTagDto } from './dto/CreateTagDto';
import { FilterTagDto } from './dto/FilterTagDto';
import { UpdateTagDto } from './dto/updateTagDto';
import { TagEntity } from './Entities/tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserPermissions.CREATE, UserPermissions.UPDATE, UserPermissions.DELETE)
  @Get()
  async getTags(@Query() query: FilterTagDto) {
    return await this.tagService.getTags(query);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserPermissions.UPDATE)
  @Get(':id')
  async getTag(@Param('id') id: string) {
    return await this.tagService.getTag(id);
  }

  @Post()
  async createTag(@Body() payload: createTagDto) {
    await this.tagService.createTag(payload);
    return {
      message: 'Tag created successfully',
      statusCode: HttpStatus.CREATED,
      tag: payload,
    };
  }

  @Delete('/:id')
  async deleteTag(@Param('id') id: string) {
    return await this.tagService.deleteTag(id);
  }

  @Patch('/:id')
  async updateTag(@Param('id') id: string, @Body() payload: UpdateTagDto) {
    return await this.tagService.updateTag(id, payload);
  }
}

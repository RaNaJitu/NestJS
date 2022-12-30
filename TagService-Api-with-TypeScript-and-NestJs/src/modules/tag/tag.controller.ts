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
import * as bcrypt from 'bcrypt';
import { Roles } from '../../auth/decorator/role.decorator';
import { UserPermissions } from '../../auth/decorator/role.enum';
import Role from '../../auth2/role.enum';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import { RolesGuard } from '../../guards/roles.guard';
import { createTagDto } from './dto/CreateTagDto';
import { FilterTagDto } from './dto/FilterTagDto';
import { signupDto } from './dto/singup.Dto';
import { UpdateTagDto } from './dto/updateTagDto';
import { TagEntity } from './Entities/tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  // @hasRoles('user')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(UserPermissions.READ)
  @Get()
  async getTags(@Query() query: FilterTagDto) {
    return await this.tagService.getTags(query);
  }

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

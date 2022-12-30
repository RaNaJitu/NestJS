import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateStudentDTO } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
  @Get()
  getStudent(): string {
    return 'All Students are showing';
  }

  @Post()
  postStudent(@Body() body: CreateStudentDTO): string {
    console.log(body);
    return 'Added the Students Details';
  }

  @Get('/:id')
  getStudentById(): string {
    return 'Get Particular Details';
  }

  @Delete('/:id')
  deleteStudent(): string {
    return 'Students Deleted Successfully';
  }

  @Put('/:id')
  updateStudent(): string {
    return 'Student Details Updated Successfully';
  }
}

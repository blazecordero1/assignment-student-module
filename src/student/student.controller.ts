import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.create(studentData);
  }
  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }
  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() studentData: Partial<Student>): Promise<Student> {
    return this.studentService.update(id, studentData);
  }
}
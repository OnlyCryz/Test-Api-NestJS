import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';

import { StudentsService } from '../../services/students/students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  // Obtener todos los Estudiantes
  @Get()
  @HttpCode(HttpStatus.OK)
  getStudents() {
    return this.studentsService.findAll();
  }

  // Obtener Estudiante por ID
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getStudent(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  // Crear Estudiante
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() student: any) {
    return this.studentsService.create(student);
  }

  // Editar Estudiante
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() data: any) {
    return this.studentsService.update(id, data);
  }

  // Eliminar Estudiante
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }
}
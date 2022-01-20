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
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { SubjectsService } from '../services/subjects.service';
import { CreateSubjectDto, UpdateSubjectDto } from '../dtos/subjects.dto';

@ApiTags('subjects')
@Controller('subjects')
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  // Obtener todas las Asignaturas
  @Get()
  @ApiOperation({ summary: 'Obtener todas las Asignaturas' })
  @HttpCode(HttpStatus.OK)
  getSubjects() {
    return this.subjectsService.findAll();
  }

  // Obtener Asignatura por ID
  @Get(':id')
  @ApiOperation({ summary: 'Obtener Asignatura por ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getSubject(@Param('id') id: string) {
    return this.subjectsService.findOne(id);
  }

  // Crear Asignatura
  @Post()
  @ApiOperation({ summary: 'Crear Asignatura' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateSubjectDto) {
    return this.subjectsService.create(body);
  }

  // Editar Asignatura
  @Put(':id')
  @ApiOperation({ summary: 'Editar Asignatura' })
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() body: UpdateSubjectDto) {
    return this.subjectsService.update(id, body);
  }

  // Eliminar Asignatura
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar Asignatura' })
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.subjectsService.remove(id);
  }

  // Obtener Estudiantes de la Asignatura
  @Get(':id/students')
  @ApiOperation({ summary: 'Obtener Estudiantes de la Asignatura' })
  @HttpCode(HttpStatus.ACCEPTED)
  getStudents(@Param('id') id: string) {
    return this.subjectsService.findStudentsBySubject(id);
  }
}

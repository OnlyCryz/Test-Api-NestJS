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
import { StudentsService } from '../services/students.service';
import { CreateStudentDto, UpdateStudentDto } from '../dtos/students.dto';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  // Obtener todos los Estudiantes
  @Get()
  @ApiOperation({ summary: 'Obtener todos los Estudiantes' })
  @HttpCode(HttpStatus.OK)
  getStudents() {
    return this.studentsService.findAll();
  }

  // Obtener Estudiante por ID
  @Get(':id')
  @ApiOperation({ summary: 'Obtener Estudiante por ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getStudent(@Param('id') id: string) {
    return this.studentsService.findOne(id);
  }

  // Crear Estudiante
  @Post()
  @ApiOperation({ summary: 'Crear Estudiante' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateStudentDto) {
    return this.studentsService.create(body);
  }

  // Editar Estudiante
  @Put(':id')
  @ApiOperation({ summary: 'Editar Estudiante' })
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() body: UpdateStudentDto) {
    return this.studentsService.update(id, body);
  }

  // Eliminar Estudiante
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar Estudiante' })
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.studentsService.remove(id);
  }

  // Obtener Universidad del Estudiante
  @Get(':id/university')
  @ApiOperation({ summary: 'Obtener Universidad del Estudiante' })
  @HttpCode(HttpStatus.ACCEPTED)
  getUniversity(@Param('id') id: string) {
    return this.studentsService.findUniversityByStudent(id);
  }

  // Obtener Asignaturas del Estudiante
  @Get(':id/subjects')
  @ApiOperation({ summary: 'Obtener Asignaturas del Estudiante' })
  @HttpCode(HttpStatus.ACCEPTED)
  getSubjects(@Param('id') id: string) {
    return this.studentsService.findSubjectsByStudent(id);
  }
}

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

import { UniversitiesService } from '../services/universities.service';
import {
  CreateUniversityDto,
  UpdateUniversityDto,
} from '../dtos/universities.dto';

@Controller('universities')
export class UniversitiesController {
  constructor(private universitiesService: UniversitiesService) {}

  // Obtener todas las Universidades
  @Get()
  @HttpCode(HttpStatus.OK)
  getUniversities() {
    return this.universitiesService.findAll();
  }

  // Obtener Universidad por ID
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getUniversity(@Param('id') id: string) {
    return this.universitiesService.findOne(id);
  }

  // Crear Universidad
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateUniversityDto) {
    return this.universitiesService.create(body);
  }

  // Editar Universidad
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() body: UpdateUniversityDto) {
    return this.universitiesService.update(id, body);
  }

  // Eliminar Universidad
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.universitiesService.remove(id);
  }
}

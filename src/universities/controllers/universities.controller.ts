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
import { UniversitiesService } from '../services/universities.service';
import {
  CreateUniversityDto,
  UpdateUniversityDto,
} from '../dtos/universities.dto';

@ApiTags('universities')
@Controller('universities')
export class UniversitiesController {
  constructor(private universitiesService: UniversitiesService) {}

  // Obtener todas las Universidades
  @Get()
  @ApiOperation({ summary: 'Obtener todas las Universidades' })
  @HttpCode(HttpStatus.OK)
  getUniversities() {
    return this.universitiesService.findAll();
  }

  // Obtener Universidad por ID
  @Get(':id')
  @ApiOperation({ summary: 'Obtener Universidad por ID' })
  @HttpCode(HttpStatus.ACCEPTED)
  getUniversity(@Param('id') id: string) {
    return this.universitiesService.findOne(id);
  }

  // Crear Universidad
  @Post()
  @ApiOperation({ summary: 'Crear Universidad' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateUniversityDto) {
    return this.universitiesService.create(body);
  }

  // Editar Universidad
  @Put(':id')
  @ApiOperation({ summary: 'Editar Universidad' })
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() body: UpdateUniversityDto) {
    return this.universitiesService.update(id, body);
  }

  // Eliminar Universidad
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar Universidad' })
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: string) {
    return this.universitiesService.remove(id);
  }
}

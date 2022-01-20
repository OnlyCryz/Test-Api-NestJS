import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { University } from '../entities/university.entity';
import { Student } from '../../students/entities/student.entity';
import { StudentsService } from './../../students/services/students.service';
import {
  CreateUniversityDto,
  UpdateUniversityDto,
} from '../dtos/universities.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class UniversitiesService {
  constructor(
    @Inject(forwardRef(() => StudentsService))
    private studentsService: StudentsService,
  ) {}
  // Universidades de prueba
  private universities: University[] = [
    {
      id: nanoid(8),
      name: 'Universidad de la Frontera',
      direction: 'Francisco Salazar 1145',
      city: 'Temuco',
    },
    {
      id: nanoid(8),
      name: 'Universidad Catolica de Temuco',
      direction: 'Manuel Montt 56',
      city: 'Temuco',
    },
  ];

  // Buscar todas las Universidades
  findAll() {
    return this.universities;
  }

  // Buscar la Universidad por ID
  findOne(id: string) {
    const university = this.universities.find(
      (university) => university.id === id,
    );
    if (!university) {
      throw new NotFoundException(`La Universidad: ${id}, no fue encontrada`);
    }
    return university;
  }

  // Agregar una nueva Universidad
  create(body: CreateUniversityDto) {
    const newUniversity = {
      id: nanoid(8),
      ...body,
    };
    this.universities.push(newUniversity);
    return newUniversity;
  }

  // Editar una Universidad
  update(id: string, body: UpdateUniversityDto) {
    const university = this.findOne(id);
    if (!university) {
      throw new NotFoundException(`La universidad: ${id}, no fue encontrada`);
    }
    const index = this.universities.findIndex(
      (university) => university.id === id,
    );
    this.universities[index] = {
      ...university,
      ...body,
    };
    return this.universities[index];
  }

  // Eliminar una Universidad
  remove(id: string) {
    const index = this.universities.findIndex(
      (university) => university.id === id,
    );
    if (index === -1) {
      throw new NotFoundException(`La universidad: ${id}, no fue encontrada`);
    }
    this.universities.splice(index, 1);
    return true;
  }

  // Buscar los Estudiantes de la Universidad
  findStudentsByUniversity(id: string): Student[] {
    const students = this.studentsService
      .findAll()
      .filter((student) => student.university.id === id);
    return students;
  }
}

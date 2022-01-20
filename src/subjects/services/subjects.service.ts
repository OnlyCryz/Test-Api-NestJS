import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Subject } from '../entities/subject.entity';
import { CreateSubjectDto, UpdateSubjectDto } from '../dtos/subjects.dto';
import { Student } from '../../students/entities/student.entity';
import { StudentsService } from './../../students/services/students.service';
import { nanoid } from 'nanoid';

@Injectable()
export class SubjectsService {
  constructor(
    @Inject(forwardRef(() => StudentsService))
    private studentsService: StudentsService,
  ) {}

  // Asignaturas de prueba
  private subjects: Subject[] = [
    {
      id: nanoid(8),
      name: 'Fundamentos de la Programacion',
      description: 'Buenas practicas y patrones de programacion',
      teacher: 'Bruno Mars',
    },
    {
      id: nanoid(8),
      name: 'Calculo I',
      description: 'Introduccion a las derividas e integrales',
      teacher: 'Ariana Grande',
    },
  ];

  // Buscar todas las Asignaturas
  findAll() {
    return this.subjects;
  }

  // Buscar la Asignatura por ID
  findOne(id: string) {
    const subject = this.subjects.find((subject) => subject.id === id);
    if (!subject) {
      throw new NotFoundException(`La Asignarua: ${id}, no fue encontrada`);
    }
    return subject;
  }

  // Crear una nueva Asignatura
  create(body: CreateSubjectDto) {
    const newSubject = {
      id: nanoid(8),
      ...body,
    };
    this.subjects.push(newSubject);
    return newSubject;
  }

  // Editar una Asignatura
  update(id: string, body: UpdateSubjectDto) {
    const subject = this.findOne(id);
    if (!subject) {
      throw new NotFoundException(`La Asignatura: ${id}, no fue encontrado`);
    }
    const index = this.subjects.findIndex((subject) => subject.id === id);
    this.subjects[index] = {
      ...subject,
      ...body,
    };
    return this.subjects[index];
  }

  // Eliminar una Asignatura
  remove(id: string) {
    const index = this.subjects.findIndex((subject) => subject.id === id);
    if (index === -1) {
      throw new NotFoundException(`La Asignatura: ${id}, no fue encontrado`);
    }
    this.subjects.splice(index, 1);
    return true;
  }

  // Buscar los Estudiantes de la Asignatura
  findStudentsBySubject(id: string): Student[] {
    const students = this.studentsService.findAll().filter((student) => {
      return student.subjects.map((subject) => subject.id === id);
    });
    return students;
  }
}

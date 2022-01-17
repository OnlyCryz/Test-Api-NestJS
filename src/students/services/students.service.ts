import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from '../entities/student.entity';
import { University } from '../../universities/entities/university.entity';
import { CreateStudentDto, UpdateStudentDto } from '../dtos/students.dtos';
import { nanoid } from 'nanoid';
import { UniversitiesService } from './../../universities/services/universities.service';
@Injectable()
export class StudentsService {
  constructor(private universitiesService: UniversitiesService) {}
  // Estudiante de prueba
  private students: Student[] = [
    {
      id: nanoid(8),
      name: 'Cristobal Carrion',
      age: 24,
      email: 'cristobal@test.com',
      university: this.universitiesService.findAll()[0],
    },
    {
      id: nanoid(8),
      name: 'Eduardo Queupumil',
      age: 23,
      email: 'eduardo@test.com',
      university: this.universitiesService.findAll()[1],
    },
  ];

  // Buscar todos los Estudiantes
  findAll() {
    return this.students;
  }

  // Buscar al Estudiante por ID
  findOne(id: string) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException(`El Estudiante: ${id}, no fue encontrado`);
    }
    return student;
  }

  // Crear un nuevo Estudiante
  create(body: CreateStudentDto) {
    const newEstudent = {
      id: nanoid(8),
      ...body,
    };
    this.students.push(newEstudent);
    return newEstudent;
  }

  // Editar un Estudiante
  update(id: string, body: UpdateStudentDto) {
    const student = this.findOne(id);
    if (student) {
      const index = this.students.findIndex((student) => student.id === id);
      this.students[index] = {
        ...student,
        ...body,
      };
      return this.students[index];
    }
    return null;
  }

  // Eliminar un Estudiante
  remove(id: string) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new NotFoundException(`El Estudiante: ${id}, no fue encontrado`);
    }
    this.students.splice(index, 1);
    return true;
  }

  // Buscar la Universidad del Estudiante

  findUniversityByStudent(id: string): University {
    return this.findOne(id).university;
  }
}

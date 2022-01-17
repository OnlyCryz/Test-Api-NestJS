import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from '../../entities/student.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class StudentsService {
  private students: Student[] = [
    {
      id: nanoid(8),
      name: 'Cristobal Carrion',
      age: 24,
      email: 'cristobal@test.com',
    },
  ];

  // Buscar todos los Estudiantes
  findAll() {
    return this.students;
  }

  // Buscar al Estudiante por ID
  findOne(id: string) {
    const product = this.students.find((student) => student.id === id);
    if (!product) {
      throw new NotFoundException(`El Estudiante: ${id}, no fue encontrado`);
    }
    return product;
  }

  // Crear un nuevo Estudiante
  create(student: any) {
    const newEstudent = {
      id: nanoid(8),
      ...student,
    };
    this.students.push(newEstudent);
    return newEstudent;
  }

  // Editar un Estudiante
  update(id: string, data: any) {
    const student = this.findOne(id);
    if (student) {
      const index = this.students.findIndex((student) => student.id === id);
      this.students[index] = {
        ...student,
        ...data,
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
}

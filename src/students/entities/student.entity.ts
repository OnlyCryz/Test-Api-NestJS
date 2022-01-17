import { University } from './../../universities/entities/university.entity';
export class Student {
  id: string;
  name: string;
  age: number;
  email: string;
  university: University;
}

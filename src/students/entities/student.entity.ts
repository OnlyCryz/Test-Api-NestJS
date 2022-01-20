import { University } from './../../universities/entities/university.entity';
import { Subject } from './../../subjects/entities/subject.entity';
export class Student {
  id: string;
  name: string;
  age: number;
  email: string;
  university: University;
  subjects: Subject[];
}

export class CreateStudentDto {
  readonly name: string;
  readonly age: number;
  readonly email: string;
}

export class UpdateStudentDto {
  readonly name?: string;
  readonly age?: number;
  readonly email?: string;
}

import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive,
  IsEmail,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly age: number;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}

// PartialType permite que no sea necesario llenar todos los campos que se quieran editar
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}

import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive,
  IsEmail,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { University } from '../../universities/entities/university.entity';
import { Subject } from './../../subjects/entities/subject.entity';

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly age: number;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  readonly university: University;

  @ApiProperty()
  readonly subjects: Subject[];
}

// PartialType permite que no sea necesario llenar todos los campos que se quieran editar
export class UpdateStudentDto extends PartialType(CreateStudentDto) {}

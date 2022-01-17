import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUniversityDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly direction: string;

  @IsString()
  @IsNotEmpty()
  readonly city: string;
}

// PartialType permite que no sea necesario llenar todos los campos que se quieran editar
export class UpdateUniversityDto extends PartialType(CreateUniversityDto) {}

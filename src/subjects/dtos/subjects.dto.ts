import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly teacher: string;
}

// PartialType permite que no sea necesario llenar todos los campos que se quieran editar
export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}

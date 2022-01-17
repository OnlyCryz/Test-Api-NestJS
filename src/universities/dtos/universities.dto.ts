import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';
export class CreateUniversityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly direction: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly city: string;
}

// PartialType permite que no sea necesario llenar todos los campos que se quieran editar
export class UpdateUniversityDto extends PartialType(CreateUniversityDto) {}

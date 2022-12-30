import { IsNumber, IsString } from 'class-validator';

export class CreateStudentDTO {
  @IsString()
  readonly id: string;
  @IsString()
  readonly name: string;
  @IsNumber()
  readonly age: number;
  @IsString()
  readonly email: string;
  @IsNumber()
  readonly mobile: number;
  @IsString()
  readonly class: string;
}

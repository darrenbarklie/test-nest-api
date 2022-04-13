import { IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  readonly first_name: string;

  @IsOptional()
  @IsString()
  readonly last_name: string;

  @IsOptional()
  @IsNumber()
  readonly age: number;
}

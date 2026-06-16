import {
  IsString,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreateGymDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNumber()
  rating: number;
}
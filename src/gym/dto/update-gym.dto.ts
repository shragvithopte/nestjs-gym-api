import {
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateGymDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;
}
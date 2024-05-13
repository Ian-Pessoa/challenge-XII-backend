import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  referralCode: string;

  @IsString()
  @IsNotEmpty()
  carType: string;
}
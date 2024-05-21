import { IsString, IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';

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

  @IsBoolean()
  ownCar: boolean;

  @IsString()
  @IsNotEmpty()
  carType: string;
}
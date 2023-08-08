import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 50)
  @IsString()
  fName: string;

  @Length(2, 50)
  @IsString()
  lName: number;

  @IsEmail()
  @IsString()
  email: string;

  @Length(8, 20)
  @IsString()
  password: string;

  @IsString()
  imgSrc: string;

  role: string;
}

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsEqualTo } from '../decorator/match.decorator';

export class SingupDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEqualTo('password')
  passwordConfirm: string;
}

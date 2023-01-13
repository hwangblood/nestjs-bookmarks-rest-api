import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaService } from './../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  login(): { message: string } {
    return { message: 'login a user' };
  }
  async signup(dto: AuthDto): Promise<any> {
    // generate the password hash
    const hash = await argon2.hash(dto.password);

    // TODO save the new user to db
    // ...

    // return saved user
    return { hash };
  }
}

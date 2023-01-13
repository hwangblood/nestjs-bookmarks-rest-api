import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  login(): { message: string } {
    return { message: 'login a user' };
  }
  signup(): { message: string } {
    return { message: 'signup a user' };
  }
}

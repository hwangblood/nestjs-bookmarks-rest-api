import { Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon2 from 'argon2';
import { PrismaService } from './../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user)
      throw new ForbiddenException('Credentials incorrect, user not exist.');

    // compare password
    const pwMatches = await argon2.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!pwMatches)
      throw new ForbiddenException('Credentials incorrect, password incorrect');

    // send back the user
    delete user.hash;
    return user;
  }
  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = await argon2.hash(dto.password);

    // save the new user to db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // return saved user without hash
      delete user.hash;
      return user;
    } catch (error) {
      // Customize the table name in the database
      if (error instanceof PrismaClientKnownRequestError) {
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2002
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials taken, there is a unique constraint violation, a new user cannot be created with this email',
          );
        }
      }
      throw error;
    }
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): { message: string } {
    return { message: 'login a user' };
  }
  signup(): { message: string } {
    return { message: 'signup a user' };
  }
}

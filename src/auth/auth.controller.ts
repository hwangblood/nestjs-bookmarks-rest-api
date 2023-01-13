import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /auth/login
   * @returns
   */
  @Post('login')
  login(): { message: string } {
    return this.authService.login();
  }

  /**
   * POST /auth/signup
   * @returns
   */
  @Post('signup')
  signup(): { message: string } {
    return this.authService.signup();
  }
}

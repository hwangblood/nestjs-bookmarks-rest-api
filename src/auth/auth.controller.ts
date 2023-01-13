import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /auth/login
   * @returns
   */
  @Post('login')
  login(@Body() dto: any) {
    console.log(dto);

    return this.authService.login();
  }

  /**
   * POST /auth/signup
   * @returns
   */
  @Post('signup')
  signup(@Body() dto: any) {
    console.log(dto);
    return this.authService.signup();
  }
}

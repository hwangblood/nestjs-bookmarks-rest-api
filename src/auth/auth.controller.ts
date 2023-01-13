import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /auth/login
   * @returns
   */
  @Post('login')
  login(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authService.login();
  }

  /**
   * POST /auth/signup
   * @returns
   */
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log(dto);
    return this.authService.signup();
  }
}

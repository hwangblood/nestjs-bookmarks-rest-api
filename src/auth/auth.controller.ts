import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto, SingupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * POST /auth/signin
   * @returns
   */
  @Post('signin')
  signin(@Body() dto: SigninDto) {
    return this.authService.signin(dto);
  }

  /**
   * POST /auth/signup
   * @returns
   */
  @Post('signup')
  signup(@Body() dto: SingupDto) {
    return this.authService.signup(dto);
  }
}

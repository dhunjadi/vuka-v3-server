// auth.controller.ts
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UsersService) {}

  @Post('login')
  async login(
    @Body() loginData: { email: string; password: string },
  ): Promise<Omit<User, 'password'>> {
    const user = await this.userService.userLogin(
      loginData.email,
      loginData.password,
    );

    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }
}

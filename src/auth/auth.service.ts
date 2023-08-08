import { Injectable } from '@nestjs/common';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOne(email);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    const payload = {
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      imgSrc: user.imgSrc,
      role: user.role,
      sub: user._id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

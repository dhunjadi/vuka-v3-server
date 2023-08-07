import { Injectable } from '@nestjs/common';
import { User } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findOne(email);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }
}

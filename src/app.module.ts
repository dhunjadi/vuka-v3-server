import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoURI } from './config/keys';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [MongooseModule.forRoot(mongoURI)],
  controllers: [AppController, AuthController, UsersController],
  providers: [AppService, AuthService],
})
export class AppModule {}

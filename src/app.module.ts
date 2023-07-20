import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoURI } from './config/keys';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(mongoURI), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

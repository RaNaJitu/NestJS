import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserController } from './user/users.controller';
import { UsersService } from './user/users.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jitu123',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UsersService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';

@Module({
  exports: [UsersModule],
  providers: [AuthService],
})
export class AuthModule {}

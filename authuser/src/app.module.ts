import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost/satyam"),UserModule, AuthModule],
  controllers: [],
  providers: [],
})  
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';
// import { Login } from './tag/Entities/login.entity';
// import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserController } from './modules/user/user.controller';
import { TagModule } from './modules/tag/tag.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TagModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (appConfigService: AppConfigService) =>
        appConfigService.sqlConfig,
      inject: [AppConfigService],
    }),
    // UserModule,
    // TypeOrmModule.forFeature(entities:[Login]);
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

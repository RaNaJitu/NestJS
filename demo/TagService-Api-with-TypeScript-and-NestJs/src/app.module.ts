import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { TagModule } from './module/tag/tag.module';
import { UserModule } from './module/user/user.module';
import { AppConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    UserModule,
    TagModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (appConfigService: AppConfigService) =>
        appConfigService.sqlConfig,
      inject: [AppConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

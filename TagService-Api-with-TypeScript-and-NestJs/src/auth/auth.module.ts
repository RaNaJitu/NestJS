// import { forwardRef, Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { JwtAuthGuard } from '../guards/jwt-guard';
// import { RolesGuard } from '../guards/roles.guard';
// import { JwtStrategy } from '../guards/jwt-strategy';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { UserModule } from '../modules/user/user.module';
// import { LocalStrategy } from './local.strategy';
// // import { TagModule } from '../tag/tag.module';
// // import { TagService } from '../tag/tag.service';

// @Module({
//   //   imports: [
//   //     UserModule,
//   //     PassportModule,
//   //     ConfigModule,
//   //     JwtModule.registerAsync({
//   //       imports: [ConfigModule],
//   //       inject: [ConfigService],
//   //       useFactory: async (configService: ConfigService) => ({
//   //         secret: configService.get('JWT_SECRET'),
//   //         signOption: { expiresIn: '100s' },
//   //       }),
//   //     }),
//   //   ],
//   //   controllers: [AuthController],
//   //   providers: [AuthService, LocalStrategy],
//   // providers: [AuthService, RolesGuard, JwtAuthGuard, JwtStrategy],
//   // providers: [TagService, RolesGuard, JwtAuthGuard, JwtStrategy],
//   // exports: [AuthService],
//   // imports: [
//   //   UserModule,
//   //   PassportModule,
//   //   JwtModule.register({
//   //     secret: process.env.JWT_SECRET,
//   //     signOptions: { expiresIn: '3600s' },
//   //   }),
//   // ],
//   // providers: [AuthService, JwtStrategy],
//   // controllers: [AuthController],
// })
// export class AuthModule {}
import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../modules/user/user.module';
// import { JwtStrategy } from '../guards/jwt-strategy';
// import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  // providers: [AuthService, JwtStrategy],
  // controllers: [AuthController],
})
export class AuthModule {}

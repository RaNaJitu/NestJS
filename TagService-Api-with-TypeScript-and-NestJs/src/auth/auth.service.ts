// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt';
// import { Observable, from, of } from 'rxjs';
// import { UserService } from '../modules/user/user.service';
// // import { User } from '../user/models/user.interface';
// const bcrypt = require('bcrypt');

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly usersService: UserService,
//     private readonly jwtService: JwtService,
//     private readonly configService: ConfigService,
//   ) {}

//   public getCookieWithJwtToken(userId: number) {
//     const payload: TokenPayload = { userId };
//     const token = this.jwtService.sign(payload);
//     return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
//   }

//   // public async getAuthenticatedUser(email: string, plainTextPassword: string) {
//   //   try {
//   //     const user = await this.usersService.getByEmail(email);
//   //     await this.verifyPassword(plainTextPassword, user.password);
//   //     user.password = undefined;
//   //     return user;
//   //   } catch (error) {
//   //     throw new HttpException(
//   //       'Wrong credentials provided',
//   //       HttpStatus.BAD_REQUEST,
//   //     );
//   //   }
//   // }

//   // private async verifyPassword(
//   //   plainTextPassword: string,
//   //   hashedPassword: string,
//   // ) {
//   //   const isPasswordMatching = await bcrypt.compare(
//   //     plainTextPassword,
//   //     hashedPassword,
//   //   );
//   //   if (!isPasswordMatching) {
//   //     throw new HttpException(
//   //       'Wrong credentials provided',
//   //       HttpStatus.BAD_REQUEST,
//   //     );
//   //   }
//   // }
// }

/// we can user later
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// // import { UserLoginDTO } from '../user/dtos/loginUser.dto';
// // import { UserService } from '../user/user.service';

// @Injectable()
// export class AuthService {
//   constructor(
//     // private readonly userService: UserService,
//     private readonly jwtService: JwtService,
//   ) {}

//   // async validateUser(username: string, password: string): Promise<any> {
//   //   const user = await this.userService.findUser(username);
//   //   const isPasswordMatch = await bcrypt.compare(password, user.password);
//   //   if (user && isPasswordMatch) {
//   //     return user;
//   //   }
//   //   return null;
//   // }

//   // async login(payload: UserLoginDTO) {
//   //   const user = await this.validateUser(payload.username, payload.password);
//   //   if (!user) {
//   //     throw new UnauthorizedException();
//   //   }
//   //   const userData = {
//   //     userName: user.username,
//   //     sub: user._id,
//   //     permissions: user.userPermission,
//   //   };
//   //   console.log(userData);
//   //   return {
//   //     access_token: this.jwtService.sign(userData),
//   //   };
//   // }
// }

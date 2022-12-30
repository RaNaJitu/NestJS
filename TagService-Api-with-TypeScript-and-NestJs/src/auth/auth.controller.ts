// import { Controller, Get, Post, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from '../guards/jwt-guard';
// import { RolesGuard } from '../guards/roles.guard';
// import { AuthService } from './auth.service';
// import { Roles } from './decorator/role.decorator';
// import { UserPermissions } from './decorator/role.enum';
// // import { hasRoles } from './decorator/role.decorator';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   // @hasRoles()
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles(UserPermissions.READ)
//   @Post('signup')
//   signup() {
//     return 'Successfully SignUp';
//   }

//   // @Post('signin')
//   // signin() {
//   //   return 'signin router';
//   // }

//   // @Get('signout')
//   // signout() {
//   //   return 'signout router';
//   // }
// }

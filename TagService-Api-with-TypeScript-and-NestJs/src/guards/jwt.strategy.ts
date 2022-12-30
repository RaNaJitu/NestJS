import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import 'dotenv/config';
// import { Strategy } from 'passport-local';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // secretOrKey: configService.get('JWT_SECRET'),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    // return { userId: payload.sub, username: payload.username };
    return { user: payload.user, userPermission: payload.userPermission };
  }
}

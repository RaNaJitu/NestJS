import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
// import { AuthService } from '../auth/auth.service';
import { TagService } from '../modules/tag/tag.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(forwardRef(() => TagService))
    private AuthService: TagService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log('--------------Role', roles);
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    console.log('-----request----', request);
    return roles.some((role) => request.userPermission?.includes(role));
    // console.log('----request----', request);
    // const user = request.user;
    // console.log('--------user', user);
    // return matchRoles(roles, user.roles);
    // return true;
  }
}

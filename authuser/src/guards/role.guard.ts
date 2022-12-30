import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserPermissions } from 'src/modules/auth/enums/role.enum';
import { ROLES_KEY } from 'src/modules/auth/enums/roles.decorator';


@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserPermissions[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log("----------------requiredRoles--------------",requiredRoles)
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    console.log("------------------------------user------------------",user)
    return requiredRoles.some((role) => user.userPermission?.includes(role));
  }
}
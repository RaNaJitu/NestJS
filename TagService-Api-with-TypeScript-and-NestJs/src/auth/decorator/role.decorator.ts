import { SetMetadata } from '@nestjs/common';
import { UserPermissions } from './role.enum';

export const ROLES_KEY = 'permissions';
console.log('-----ROLES_KEY--ROLES_KEY---', ROLES_KEY);
//Create Role Decorator
export const Roles = (...roles: UserPermissions[]) => {
  console.log('---roles----', roles);
  return SetMetadata(ROLES_KEY, roles);
};
console.log('------Roles-Roles----', Roles);

// import { SetMetadata } from '@nestjs/common';
// export const hasRoles = (...hasRoles: string[]) =>
//   SetMetadata('role', hasRoles);

import { UserPermissions } from '../../auth/enums/role.enum';

export class CreateUserDTO {
  username: string;
  email: string;
  password: string;
  userPermission: string;
}

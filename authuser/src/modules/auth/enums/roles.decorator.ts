import { SetMetadata } from "@nestjs/common"
import { UserPermissions } from "./role.enum"

export const ROLES_KEY = 'permissions'

//Create a role decorator 
export const Roles = (...roles:UserPermissions[])=>SetMetadata(ROLES_KEY,roles)



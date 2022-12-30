import { IsString } from 'class-validator';
interface IUser {
  email: string;
  password: string;
}
export class loginUserDto implements IUser {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

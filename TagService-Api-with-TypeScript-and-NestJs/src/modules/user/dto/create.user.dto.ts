import { IsString } from 'class-validator';
interface IUser {
  name: string;
  email: string;
  password: string;
}
export class createUserDto implements IUser {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}

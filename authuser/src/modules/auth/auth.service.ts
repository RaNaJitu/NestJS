import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserLoginDTO } from '../user/dtos/loginUser.dto';
import { UserService } from '../user/user.service';


@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService,private readonly jwtService: JwtService){}

    async validateUser(username:string,password:string):Promise<any>{
        const user = await this.userService.findUser(username);
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(user && isPasswordMatch){
            return user;
        }
        return null;
    }

    async login(payload:UserLoginDTO){
        const user = await this.validateUser(payload.username,payload.password);
        if(!user){
            throw new UnauthorizedException()
        }
        const userData = {userName:user.username,sub: user._id, permissions: user.userPermission}
        console.log(userData)
        return {
            access_token:this.jwtService.sign(userData)
        }
    }
}

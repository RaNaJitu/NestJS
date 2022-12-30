import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { UserPermissions } from "src/modules/auth/enums/role.enum";
export type UserDocument = User & Document;

@Schema()

export class User {
    @Prop()
    username:string;

    @Prop()
    email:string;

    @Prop()
    password:string;


    @Prop()
    userPermission:UserPermissions[];

    
}


export const UserSchema = SchemaFactory.createForClass(User);


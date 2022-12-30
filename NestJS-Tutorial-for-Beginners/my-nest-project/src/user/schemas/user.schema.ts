import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    designation: String,
    age: Number,
})
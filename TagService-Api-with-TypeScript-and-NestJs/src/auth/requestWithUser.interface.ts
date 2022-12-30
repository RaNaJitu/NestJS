import { Request } from 'express';
import UserEntity from '../modules/user/entity/user.entity';
// import User from '../../users/user.entity';

interface RequestWithUser extends Request {
  user: UserEntity;
}

export default RequestWithUser;

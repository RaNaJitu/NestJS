import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import Role from '../../../auth2/role.enum';

@Entity()
class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  public role: Role;

  // ...
}

export default UserEntity;

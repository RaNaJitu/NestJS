import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserPermissions } from '../../auth/enums/role.enum';

@Entity()
class UsersEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public username: string;

  @Column()
  public password: string;

  @Column()
  public userPermission: string;

  // ...
}

export default UsersEntity;

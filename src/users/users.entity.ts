import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'users'})
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

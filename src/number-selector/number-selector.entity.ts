import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LevelType } from '@app/number-selector/types/levelType';
import { UsersEntity } from '@app/users/users.entity';

@Entity({ name: 'number-selector' })
export class NumberSelectorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable:false})
  createdAt: string;

  @Column({ default: 0 })
  successFullCount: number;

  @Column({ default: 0 })
  unSuccessFullCount: number;

  @Column({ type: 'enum', enum: LevelType })
  level: LevelType;

  @Column()
  durationInSeconds: number;

  @Column({nullable:false})
  userId:string
}

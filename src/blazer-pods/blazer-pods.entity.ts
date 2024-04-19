import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BlazerPodsLevelType } from '@app/blazer-pods/types/blazerPodsLevelType';

@Entity({ name: 'blazer-pods' })
export class BlazerPodsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  createdAt: string;

  @Column({ nullable: false })
  userId: string;

  @Column()
  durationInSeconds: number;

  @Column({ default: 0 })
  successFullCount: number;

  @Column({ default: 0 })
  unSuccessFullCount: number;

  @Column({ type: 'enum', enum: BlazerPodsLevelType })
  level: BlazerPodsLevelType;
}

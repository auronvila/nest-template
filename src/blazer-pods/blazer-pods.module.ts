import { Module } from '@nestjs/common';
import { BlazerPodsController } from './blazer-pods.controller';
import { BlazerPodsService } from './blazer-pods.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@app/users/users.entity';
import { BlazerPodsEntity } from '@app/blazer-pods/blazer-pods.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UsersEntity,BlazerPodsEntity])],
  controllers: [BlazerPodsController],
  providers: [BlazerPodsService]
})
export class BlazerPodsModule {}

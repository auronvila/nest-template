import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthenticationService } from './auth/authentication.service';
import { UsersController } from '@app/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@app/users/users.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from '@app/users/auth/jwt.strategy';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService, AuthenticationService, JwtService, JwtStrategy],
  exports: [UsersService, AuthenticationService, JwtStrategy],
})
export class UsersModule {
}

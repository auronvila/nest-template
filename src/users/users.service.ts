import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@app/users/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from '@app/users/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity) private userRepository: Repository<UsersEntity>,
  ) {
  }

  async create(userData: CreateUserDto) {
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }

  async findUserByEmail(email: string) {
    const user = this.userRepository.findOneBy({ email });
    if (user) {
      return user;
    } else {
      throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }
  }

  async getUserInfo(userId: string) {
    const user = this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new HttpException('user does not exits', HttpStatus.NOT_FOUND)
    }

    return user
  }
}

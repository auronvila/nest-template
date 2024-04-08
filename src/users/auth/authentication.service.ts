import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@app/users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UsersEntity } from '@app/users/users.entity';
import { UsersService } from '@app/users/users.service';
import { SignInDto } from '@app/users/dto/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { CreateUser1712220860556 } from '@app/migrations/1712220860556-CreateUser';
import * as process from 'process'; // Assuming you have a UserService

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {
  }


  async generateAccessToken(user: UsersEntity) {
    const payload = { email: user.email, id: user.id, phoneNumber: user.phoneNumber };
    return this.jwtService.sign(payload, { secret: process.env.JWT_SECRET, expiresIn: '6m' });
  }

  async signUp(newUserData: CreateUserDto) {
    const userExists = await this.userService.findUserByEmail(newUserData.email);
    if (userExists) {
      throw new HttpException('User with this email exists', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(newUserData.password, 10);
    const user = new UsersEntity();
    user.fullName = newUserData.fullName;
    user.email = newUserData.email;
    user.phoneNumber = newUserData.phoneNumber;
    user.password = hashedPassword;

    await this.userService.create(user);
    const accessToken = await this.generateAccessToken(user);
    return { ...user, access_token: accessToken };
  }


  async signIn(signInCredentials: SignInDto) {
    const user = await this.userService.findUserByEmail(signInCredentials.email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isMatch = await bcrypt.compare(signInCredentials.password, user.password);
    if (!isMatch) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const accessToken = await this.generateAccessToken(user);
    return {
      ...user,
      access_token: accessToken,
    };
  }

}

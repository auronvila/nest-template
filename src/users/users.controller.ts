import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '@app/users/dto/create-user.dto';
import { AuthenticationService } from '@app/users/auth/authentication.service';
import { SignInDto } from '@app/users/dto/sign-in.dto';
import { Serialize } from '@app/interceptors/serialize.interceptor';
import { UserResponseDto } from '@app/users/dto/user-response.dto';
import { User } from '@app/users/decorators/user.decorator';
import { JwtAuthGuard } from '@app/users/guards/auth.guard';
import { UsersService } from '@app/users/users.service';
import { UsersEntity } from '@app/users/users.entity';

@Controller('users')
@Serialize(UserResponseDto)
export class UsersController {
  constructor(
    private authService: AuthenticationService,
    private userService: UsersService,
  ) {
  }

  @Post('/sign-up')
  async signUp(@Body() userData: CreateUserDto) {
    return this.authService.signUp(userData);
  }

  @Post('/sign-in')
  async signIn(@Body() signInCredentials: SignInDto) {
    return this.authService.signIn(signInCredentials);
  }

  @Get('/getProfileInfo')
  @UseGuards(JwtAuthGuard)
  async getProfileInfo(@User() currentUser: UsersEntity) {
    return this.userService.getUserInfo(currentUser.id);
  }
}

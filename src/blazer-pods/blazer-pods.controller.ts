import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BlazerPodsService } from '@app/blazer-pods/blazer-pods.service';
import { JwtAuthGuard } from '@app/users/guards/auth.guard';
import { BlazerPodsCreateDto } from '@app/blazer-pods/dto/create.dto';
import { User } from '@app/users/decorators/user.decorator';
import { UsersEntity } from '@app/users/users.entity';

@Controller('blazer-pods')
export class BlazerPodsController {
  constructor(
    private blazerPodsService: BlazerPodsService,
  ) {
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() reqBody: BlazerPodsCreateDto,
    @User() createdUser: UsersEntity,
  ) {
    return this.blazerPodsService.createRecord(reqBody, createdUser.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getRecordsByUser(
    @User() currentUser: UsersEntity,
  ) {
    return this.blazerPodsService.getRecordsByUser(currentUser.id);
  }
}

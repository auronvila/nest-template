import { Body, Controller, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { NumberSelectorService } from '@app/number-selector/number-selector.service';
import { JwtAuthGuard } from '@app/users/guards/auth.guard';
import { CreateReqBodyDto } from '@app/number-selector/dto/create-req-body.dto';
import { User } from '@app/users/decorators/user.decorator';
import { UsersEntity } from '@app/users/users.entity';

@Controller('number-selector')
export class NumberSelectorController {
  constructor(
    private numberSelectorService: NumberSelectorService,
  ) {
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() reqBody: CreateReqBodyDto, @User() currentUserId: UsersEntity) {
    return this.numberSelectorService.create(reqBody, currentUserId.id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getByUserId(@User() currentUser: UsersEntity) {
    return this.numberSelectorService.getByUserId(currentUser.id);
  }
}

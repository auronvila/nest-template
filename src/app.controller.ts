import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from '@app/app.service';
import { JwtAuthGuard } from '@app/users/guards/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

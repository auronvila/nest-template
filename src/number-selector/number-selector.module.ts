import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NumberSelectorEntity } from './number-selector.entity';
import { NumberSelectorController } from './number-selector.controller';
import { NumberSelectorService } from './number-selector.service';
import { UsersEntity } from '@app/users/users.entity';
import { JwtAuthGuard } from '@app/users/guards/auth.guard';

@Module({
  controllers: [NumberSelectorController],
  providers: [NumberSelectorService, JwtAuthGuard],
  imports: [
    TypeOrmModule.forFeature([NumberSelectorEntity, UsersEntity]),
  ],
})
export class NumberSelectorModule {
}

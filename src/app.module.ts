import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '@app/users/users.module';
import { UsersController } from './users/users.controller';
import ormconfig from '../ormconfig';
import { LoggingMiddleware } from '@app/logger/loggerMiddleware';
import { PassportModule } from '@nestjs/passport';
import { NumberSelectorController } from './number-selector/number-selector.controller';
import { NumberSelectorService } from './number-selector/number-selector.service';
import { NumberSelectorModule } from './number-selector/number-selector.module';
import { JwtAuthGuard } from '@app/users/guards/auth.guard';
import { BlazerPodsModule } from './blazer-pods/blazer-pods.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
    NumberSelectorModule,
    BlazerPodsModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtAuthGuard],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}

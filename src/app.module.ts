import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '@app/users/users.module';
import { UsersController } from './users/users.controller';
import ormconfig from '../ormconfig';
import { LoggingMiddleware } from '@app/logger/loggerMiddleware';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from '@app/users/guards/auth.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtAuthGuard],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}

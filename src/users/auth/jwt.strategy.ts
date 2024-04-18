import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as process from 'process';
import * as dotenv from 'dotenv';
import { UsersEntity } from '@app/users/users.entity';

dotenv.config();

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: UsersEntity) {
    return { email: payload.email, phoneNumber: payload.phoneNumber, id: payload.id, fullName: payload.fullName };
  }
}

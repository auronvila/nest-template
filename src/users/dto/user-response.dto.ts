import { Expose } from 'class-transformer';

export class UserResponseDto {
  @Expose()
  id: string;

  @Expose()
  fullName: string;

  @Expose()
  phoneNumber: string;

  @Expose()
  email: string;

  @Expose()
  access_token: string;
}

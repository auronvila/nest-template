import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { LevelType } from '@app/number-selector/types/levelType';

export class CreateReqBodyDto {
  @IsNotEmpty()
  @IsNumber()
  successFullCount: number;

  @IsNotEmpty()
  @IsNumber()
  unSuccessFullCount: number;

  @IsNotEmpty()
  @IsEnum(LevelType)
  level: LevelType;

  @IsNotEmpty()
  @IsNumber()
  durationInSeconds: number;
}

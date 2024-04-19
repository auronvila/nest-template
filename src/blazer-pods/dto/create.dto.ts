import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { BlazerPodsLevelType } from '@app/blazer-pods/types/blazerPodsLevelType';

export class BlazerPodsCreateDto {
  @IsNotEmpty()
  @IsNumber()
  successFullCount: number;

  @IsNotEmpty()
  @IsNumber()
  unSuccessFullCount: number;

  @IsNotEmpty()
  @IsEnum(BlazerPodsLevelType)
  level: BlazerPodsLevelType;

  @IsNotEmpty()
  @IsNumber()
  durationInSeconds: number;
}

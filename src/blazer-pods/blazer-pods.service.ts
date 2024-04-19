import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlazerPodsEntity } from '@app/blazer-pods/blazer-pods.entity';
import { Repository } from 'typeorm';
import { BlazerPodsCreateDto } from '@app/blazer-pods/dto/create.dto';
import * as dayjs from 'dayjs';
import getCurrentDateFormated from '@app/shared/utils';

@Injectable()
export class BlazerPodsService {
  constructor(
    @InjectRepository(BlazerPodsEntity) private blazerPodsRepository: Repository<BlazerPodsEntity>,
  ) {
  }

  async createRecord(newRecordData: BlazerPodsCreateDto, currentUserId: string) {
    const record = new BlazerPodsEntity();
    const formattedDate = getCurrentDateFormated();
    record.createdAt = formattedDate;
    record.userId = currentUserId;
    Object.assign(record, newRecordData);

    return this.blazerPodsRepository.save(record);
  }

  async getRecordsByUser(currentUserId: string) {
    return this.blazerPodsRepository.find({ where: { userId: currentUserId } });
  }
}

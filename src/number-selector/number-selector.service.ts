import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NumberSelectorEntity } from '@app/number-selector/number-selector.entity';
import { Repository } from 'typeorm';
import { CreateReqBodyDto } from '@app/number-selector/dto/create-req-body.dto';
import { UsersEntity } from '@app/users/users.entity';
import * as dayjs from 'dayjs';
import getCurrentDateFormated from '@app/shared/utils';

@Injectable()
export class NumberSelectorService {
  constructor(
    @InjectRepository(NumberSelectorEntity) private numberSelectionEntity: Repository<NumberSelectorEntity>,
    @InjectRepository(UsersEntity) private userRepository: Repository<UsersEntity>,
  ) {
  }

  async create(reqBody: CreateReqBodyDto, userId: string) {
    const newRecord = new NumberSelectorEntity();
    const formattedDate = getCurrentDateFormated()
    newRecord.userId = userId;
    newRecord.createdAt = formattedDate
    Object.assign(newRecord, reqBody);

    return await this.numberSelectionEntity.save(newRecord);
  }


  async getByUserId(currentUserId: string) {
    return this.numberSelectionEntity.findBy({ userId: currentUserId });
  }
}

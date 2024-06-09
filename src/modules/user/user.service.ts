import { Injectable /*Logger*/ } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { CreateUserReqDto } from './dto/req/create-user.req.dto';
import { UpdateUserReqDto } from './dto/req/update-user.req.dto';

@Injectable()
export class UserService {
  // private readonly logger = new Logger(UserService.name);
  constructor(private readonly logger: LoggerService) {}
  public async create(createUserDto: CreateUserReqDto): Promise<any> {
    this.logger.log('This actions adds a new user');
    throw new Error('This actions adds a new user');
    return 'This action adds a new user';
  }

  public async findAll(): Promise<any> {
    return `This action returns all user`;
  }

  public async findOne(id: string): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async update(
    id: string,
    updateUserDto: UpdateUserReqDto,
  ): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async remove(id: string): Promise<any> {
    return `This action removes a #${id} user`;
  }
}

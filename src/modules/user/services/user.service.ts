import { ConflictException, Injectable /*Logger*/ } from '@nestjs/common';

import { IUserData } from '../../auth/interfaces/user-data.interface';
import { LoggerService } from '../../logger/logger.service';
import { UserRepository } from '../../repository/services/user.repository';
import { UpdateUserReqDto } from '../dto/req/update-user.req.dto';

@Injectable()
export class UserService {
  // private readonly logger = new Logger(UserService.name);
  constructor(
    private readonly logger: LoggerService,
    private userRepository: UserRepository,
  ) {}

  public async findAll(): Promise<any> {
    return `This action returns all user`;
  }

  public async findOne(id: string): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async update(
    userData: IUserData,
    updateUserDto: UpdateUserReqDto,
  ): Promise<any> {
    return `This action updates a #${userData.userId} user`;
  }

  public async remove(id: string): Promise<any> {
    return `This action removes a #${id} user`;
  }

  public async isEmailUniqueOrThrow(email: string): Promise<void> {
    const user = await this.userRepository.findOneBy({ email });
    // const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new ConflictException('Email is already taken');
    }
  }
}

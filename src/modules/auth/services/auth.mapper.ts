import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../../database/entities/user.entity';
import { UserMapper } from '../../user/services/user.mapper';
import { AuthResDto } from '../dto/res/auth.res.dto';
import { ITokenPair } from '../interfaces/token-pair.interface';

@Injectable()
export class AuthMapper {
  constructor() {}
  public static async toResponseDto(
    user: UserEntity,
    tokenPair: ITokenPair,
  ): Promise<AuthResDto> {
    return {
      tokens: {
        accessToken: tokenPair.accessToken,
        refreshToken: tokenPair.refreshToken,
      },
      user: UserMapper.toResponseDto(user),
    };
  }
}

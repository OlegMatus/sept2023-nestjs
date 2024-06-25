import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../../database/entities/user.entity';
import { UserResDto } from '../dto/res/user.res.dto';

@Injectable()
export class UserMapper {
  constructor() {}
  public static toResponseDto(user: UserEntity): UserResDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      bio: user.bio || null,
      image: user.image || null,
      isFollowed: user.followings ? user.followings.length > 0 : false,
    };
  }
}

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { UserRepository } from '../../repository/services/user.repository';
import { SKIP_AUTH } from '../constants/constants';
import { TokenTypeEnum } from '../enums/token-type.enum';
import { AuthCacheService } from '../services/auth-cache.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class JwtAccessGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly tokenService: TokenService,
    private readonly authCacheService: AuthCacheService,
    private readonly userRepository: UserRepository,
  ) {}
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const skipAuth = this.reflector.getAllAndOverride<boolean>(SKIP_AUTH, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (skipAuth) return true;
    /*//---- reflector moge distaty jakis' metaDani, a danyy context mae povernuty boolevi dani.
     Dva zna4ennj z contextu(getHandler(), getClass())
      prokudajutsja dla togo wob vin rozumiv z 40g0 potribno braty key SKIP_AUTH.
       Jakwo povernulos true to my skipaemo vykonannja vsih rewty perevirok i ka*emo mo*emo ruhatys dali ----//*/
    const request = context.switchToHttp().getRequest();
    const accessToken = request.get('Authorization')?.split('Bearer ')[1];
    if (!accessToken) {
      throw new UnauthorizedException();
    }
    const payload = await this.tokenService.verifyToken(
      accessToken,
      TokenTypeEnum.ACCESS,
    );
    if (!payload) {
      throw new UnauthorizedException();
    }
    const findTokenInRedis = await this.authCacheService.isAccessTokenExist(
      payload.userId,
      payload.deviceId,
      accessToken,
    );
    if (!findTokenInRedis) {
      throw new UnauthorizedException();
    }
    const user = await this.userRepository.findOneBy({ id: payload.userId });
    if (!user) {
      throw new UnauthorizedException();
    }
    request.user = {
      userId: user.id,
      email: user.email,
      deviceId: payload.deviceId,
    };
    return true;
  }
}

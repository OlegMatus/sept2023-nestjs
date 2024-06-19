import { /*forwardRef,*/ Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { RedisModule } from '../redis/redis.module';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { JwtAccessGuard } from './guards/jwt-access.guard';
import { AuthService } from './services/auth.service';
import { AuthCacheService } from './services/auth-cache.service';
import { TokenService } from './services/token.service';

@Module({
  // imports: [JwtModule, forwardRef(() => UserModule), RedisModule]
  // .../forward ref dopomahae unykaty bezkine4noho cyklu importiv UserModule-AuthModule wob wykorystaty @UseGuard()
  imports: [JwtModule, UserModule, RedisModule],
  controllers: [AuthController],
  providers: [
    TokenService,
    AuthService,
    AuthCacheService,
    JwtAccessGuard,
    {
      provide: APP_GUARD,
      useClass: JwtAccessGuard,
    },
  ],
  exports: [],
})
export class AuthModule {}

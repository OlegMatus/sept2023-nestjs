import { /*forwardRef*/ Module } from '@nestjs/common';

// import { AuthModule } from '../auth/auth.module';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  // imports: [forwardRef(() => AuthModule)],
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

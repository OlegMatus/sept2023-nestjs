import { Global, Module } from '@nestjs/common';

import { UserRepository } from './services/user.repository';

@Global()
@Module({
  providers: [UserRepository],
  exports: [UserRepository],
})
export class RepositoryModule {}

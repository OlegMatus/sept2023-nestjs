import { /*forwardRef*/ Module } from '@nestjs/common';

import { ArticleController } from './article.controller';
// import { AuthModule } from '../auth/auth.module';
import { ArticleService } from './services/article.service';

@Module({
  // imports: [forwardRef(() => AuthModule)],
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}

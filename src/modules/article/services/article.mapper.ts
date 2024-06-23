import { Injectable } from '@nestjs/common';

import { ArticleEntity } from '../../../database/entities/article.entity';
import { ArticleResDto } from '../dto/res/article.res.dto';

@Injectable()
export class ArticleMapper {
  constructor() {}
  public static toResponseDto(article: ArticleEntity): ArticleResDto {
    return {
      id: article.id,
      title: article.title,
      description: article.description,
      body: article.body,
      created: article.created,
      updated: article.updated,
      tags: article.tags.map((tag) => tag.name),
    };
  }
}

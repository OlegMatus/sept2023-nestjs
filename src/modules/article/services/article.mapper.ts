import { Injectable } from '@nestjs/common';

import { ArticleEntity } from '../../../database/entities/article.entity';
import { UserMapper } from '../../user/services/user.mapper';
import { ArticleListReqDto } from '../dto/req/article-list.req.dto';
import { ArticleResDto } from '../dto/res/article.res.dto';
import { ArticleListResDto } from '../dto/res/article-list.res.dto';

@Injectable()
export class ArticleMapper {
  constructor() {}
  public static toResponseDto(entity: ArticleEntity): ArticleResDto {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      body: entity.body,
      created: entity.created,
      updated: entity.updated,
      tags: entity.tags ? entity.tags.map((tag) => tag.name) : [],
      user: entity.user ? UserMapper.toResponseDto(entity.user) : null,
    };
  }
  public static toListResponseDto(
    entities: ArticleEntity[],
    total: number,
    query: ArticleListReqDto,
  ): ArticleListResDto {
    return {
      // data: entities.map((entity) => this.toResponseDto(entity))
      data: entities.map(this.toResponseDto),
      meta: {
        total,
        limit: query.limit,
        offset: query.offset,
      },
    };
  }
}

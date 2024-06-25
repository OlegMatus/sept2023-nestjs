import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { ArticleEntity } from '../../../database/entities/article.entity';
import { ArticleListReqDto } from '../../article/dto/req/article-list.req.dto';
import { ArticleListResDto } from '../../article/dto/res/article-list.res.dto';
import { IUserData } from '../../auth/interfaces/user-data.interface';

@Injectable()
export class ArticleRepository extends Repository<ArticleEntity> {
  constructor(private readonly dataSource: DataSource) {
    super(ArticleEntity, dataSource.manager);
  }
  public async getList(
    userData: IUserData,
    query: ArticleListReqDto,
  ): Promise<[ArticleEntity[], number]> {
    const qb = this.createQueryBuilder('article');
    qb.leftJoinAndSelect('article.tags', 'tag');
    qb.leftJoinAndSelect('article.user', 'user');
    qb.leftJoinAndSelect(
      'user.followings',
      'follow',
      'follow.follower_id = :myId',
    );
    qb.setParameter('myId', userData.userId);

    qb.orderBy('article.created', 'DESC');
    qb.take(query.limit || 5);
    qb.skip(query.offset || 0);

    return await qb.getManyAndCount();
  }

  public async findArticleById(
    userData: IUserData,
    articleId: string,
  ): Promise<ArticleEntity> {
    const qb = this.createQueryBuilder('article');
    qb.leftJoinAndSelect('article.tags', 'tag');
    //wob do article pryjoinyty tags kljy4 z'article.tags'' mae buty takyj jak v reletion ArticleEntity tags
    qb.leftJoinAndSelect('article.user', 'user');
    qb.leftJoinAndSelect(
      'user.followings',
      'follow',
      'follow.follower_id = :myId',
    );

    // qb.where('article.id === :articleId', { articleId: articleId });
    // perevirjaem 4y id z ArticleEntity zbigaetsja z nawojy articleId jaku my prokydaemo zzovni.
    // : ozna4ae wo articleId dynami4na
    //ce te same wo i qb.where('article.id === :articleId', { articleId: articleId })
    qb.where('article.id =  :articleId');
    qb.setParameter('articleId', articleId);
    qb.setParameter('myId', userData.userId);

    return await qb.getOne();
  }
}

import { ApiProperty } from '@nestjs/swagger';

import { UserResDto } from '../../../user/dto/res/user.res.dto';

export class ArticleResDto {
  @ApiProperty({
    example: '42d783c7-f688-43b8-872a-252b08e7ffab',
    description: 'Article ID',
  })
  id: string;

  @ApiProperty({
    example: 'Article title',
    description: 'Article Title',
  })
  title: string;

  @ApiProperty({
    example: 'Article description',
    description: 'Article Description',
  })
  description: string;

  @ApiProperty({
    example: 'Article body',
    description: 'Article Body',
  })
  body: string;

  @ApiProperty({
    example: '2021-09-29T10:00:00.000Z',
    description: 'Article Created Date',
  })
  created: Date;

  @ApiProperty({
    example: '2021-09-29T10:00:00.000Z',
    description: 'Article Updated Date',
  })
  updated: Date;

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'Article Tags',
  })
  tags: string[];

  user?: UserResDto;
}

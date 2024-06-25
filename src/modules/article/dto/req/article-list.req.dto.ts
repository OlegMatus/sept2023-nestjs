import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class ArticleListReqDto {
  @Type(() => Number)
  @IsInt()
  @Max(100)
  @Min(1)
  @IsOptional()
  limit?: number = 10;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  offset?: number = 0;

  @IsString()
  @IsOptional()
  tag?: string;

  @IsString()
  @IsOptional()
  search?: string;
}

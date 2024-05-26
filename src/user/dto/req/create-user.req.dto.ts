import { Transform, Type } from 'class-transformer';
import {
  IsInt,
  // IsEmail,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../common/helpers/transform.helper';

class CarReqDto {
  @IsString()
  @MaxLength(220)
  producer: string;

  @IsString()
  model: string;
}
export class CreateUserReqDto {
  @IsString({ message: 'Name must be string' })
  @MaxLength(50, { message: 'Max length of the name 50' })
  @MinLength(3, { message: 'Minimum length of the name 3' })
  @Transform(TransformHelper.trim)
  public readonly name: string;

  @Matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'Invalid email',
  })
  @IsString()
  // @IsEmail()
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  public readonly email: string;

  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'Invalid password',
    },
  )
  @IsString()
  @Transform(TransformHelper.trim)
  public readonly password: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  @ValidateIf((object) => object.age > 25)
  @Transform(TransformHelper.trim)
  public readonly avatar?: string;

  @IsInt()
  @IsNumber()
  @IsOptional()
  @Min(18)
  @Max(55)
  @Type(() => Number) /*.........Converts a string to a number........*/
  public readonly age?: number;

  @IsOptional()
  @IsObject()
  @ValidateNested({ each: true })
  // @Transform(({ value }) => value.trim())
  @Type(
    () => CarReqDto,
  ) /*.........Casts an object to a type CarReqDto........*/
  car: CarReqDto;
}

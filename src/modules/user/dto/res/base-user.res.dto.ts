import { ApiProperty } from '@nestjs/swagger';

export class BaseUserResDto {
  @ApiProperty({
    example: '141241251asd',
    description: 'The id of the user',
  })
  public readonly id: string;

  @ApiProperty({
    example: 'John Dear',
    description: 'The name of the user',
  })
  public readonly name: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'The email of the user',
  })
  public readonly email: string;

  @ApiProperty({
    example: 'https://www.example.com/image.png',
    description: 'The avatar of the user',
  })
  public readonly avatar?: string;

  @ApiProperty({
    example: 22,
    description: 'The age of the user',
  })
  public readonly age?: number;
}

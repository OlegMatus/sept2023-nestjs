// import { ApiProperty } from '@nestjs/swagger';

export class CreateUserReqDto {
  public readonly name: string;

  public readonly email: string;

  public readonly password: string;

  public readonly avatar?: string;

  public readonly age?: number;

  //   @ApiProperty({
  //     example: 'John Dear',
  //     description: 'The name of the user',
  //     required: true,
  //   })
  //   public readonly name: string;
  //
  //   @ApiProperty({
  //     example: 'test@gmail.com',
  //     description: 'The email of the user',
  //     required: true,
  //     type: 'string',
  //   })
  //   public readonly email: string;
  //
  //   @ApiProperty({
  //     example: 'password',
  //     description: 'The password of the user',
  //     required: true,
  //   })
  //   public readonly password: string;
  //
  //   @ApiProperty({
  //     example: 'https://www.example.com/image.png',
  //     description: 'The avatar of the user',
  //     required: true,
  //   })
  //   public readonly avatar: string;
}

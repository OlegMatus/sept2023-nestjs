import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  // Query,
} from '@nestjs/common';
import {
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  // ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

// import { BaseUserResDto } from './dto/res/base-user.res.dto';
import { CreateUserReqDto } from './dto/req/create-user.req.dto';
import { UpdateUserReqDto } from './dto/req/update-user.req.dto';
import { PrivateUserResDto } from './dto/res/private-user.res.dto';
import { PublicUserResDto } from './dto/res/public-user.res.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: PrivateUserResDto })
  @Post()
  public async create(
    @Body() dto: CreateUserReqDto,
  ): Promise<PrivateUserResDto> {
    console.log(dto);
    return await this.userService.create(dto);
  }

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: PublicUserResDto })
  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<PublicUserResDto> {
    return await this.userService.findOne(id);
  }

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: BaseUserResDto })
  @Patch(':id')
  public async update(
    @Param('id') id: string,
    // @Query() query: CreateUserReqDto,
    @Body() updateUserDto: UpdateUserReqDto,
  ): Promise<any> {
    return await this.userService.update(id, updateUserDto);
  }

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: BaseUserResDto })
  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<any> {
    return await this.userService.remove(id);
  }
}

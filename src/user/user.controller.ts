import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  // Query,
} from '@nestjs/common';
import { UserService } from './user.service';
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
    return this.userService.create(dto);
  }

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: PublicUserResDto })
  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<PublicUserResDto> {
    return this.userService.findOne(id);
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
    return this.userService.update(id, updateUserDto);
  }

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: BaseUserResDto })
  @Delete(':id')
  public async remove(@Param('id') id: string): Promise<any> {
    return this.userService.remove(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  // UseGuards,
  // Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  // ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { SkipAuthDecorator } from '../auth/decorators/skip-auth.decorator';
import { IUserData } from '../auth/interfaces/user-data.interface';
// import { JwtAccessGuard } from '../auth/guards/jwt-access.guard';
// import { BaseUserResDto } from './dto/res/base-user.res.dto';
import { UpdateUserReqDto } from './dto/req/update-user.req.dto';
import { UserResDto } from './dto/res/user.res.dto';
import { UserService } from './services/user.service';

// @UseGuards(JwtAccessGuard)
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @SkipAuthDecorator()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: PublicUserResDto })
  @Get(':id')
  public async findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<UserResDto> {
    return await this.userService.findOne(id);
  }

  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: BaseUserResDto })
  @Patch(':id')
  public async update(
    @CurrentUser() userData: IUserData,
    @Param('id', ParseUUIDPipe) id: string,
    // @Query() query: BaseUserReqDto,
    @Body() updateUserDto: UpdateUserReqDto,
  ): Promise<any> {
    return await this.userService.update(userData, updateUserDto);
  }

  @ApiBearerAuth()
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiOkResponse({ type: BaseUserResDto })
  @Delete(':id')
  public async remove(
    @CurrentUser() userData: IUserData,
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<any> {
    return await this.userService.remove(id);
  }
}

import { SetMetadata } from '@nestjs/common';

import { SKIP_AUTH } from '../constants/constants';

export const SkipAuthDecorator = () => SetMetadata(SKIP_AUTH, true);

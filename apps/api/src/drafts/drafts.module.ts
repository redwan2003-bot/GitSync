import { Module } from '@nestjs/common';
import { DraftsController } from './drafts.controller';
import { LinkedInService } from '../linkedin/linkedin.service';

@Module({
  controllers: [DraftsController],
  providers: [LinkedInService],
})
export class DraftsModule {}

import { Module } from '@nestjs/common';
import { RideOptionsService } from './ride-options.service';
import { RideOptionsController } from './ride-options.controller';

@Module({
  controllers: [RideOptionsController],
  providers: [RideOptionsService],
})
export class RideOptionsModule {}

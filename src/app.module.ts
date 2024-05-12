import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DriversModule } from './drivers/drivers.module';
import { RideOptionsModule } from './ride-options/ride-options.module';

@Module({
  imports: [DatabaseModule, DriversModule, RideOptionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

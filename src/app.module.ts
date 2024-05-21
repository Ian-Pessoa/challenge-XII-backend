import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DriversModule } from './drivers/drivers.module';
import { RideOptionsModule } from './ride-options/ride-options.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [DatabaseModule, DriversModule, RideOptionsModule, CountriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

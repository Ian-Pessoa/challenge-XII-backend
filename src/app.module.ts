import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [DatabaseModule, DriversModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

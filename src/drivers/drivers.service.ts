import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class DriversService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createDriverDto: Prisma.DriverCreateInput) {
    return this.databaseService.driver.create({ data: createDriverDto });
  }
}

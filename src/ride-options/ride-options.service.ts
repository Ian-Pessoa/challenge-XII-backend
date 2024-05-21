import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RideOptionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.rideOption.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.rideOption.findUnique({
      where: {
        id,
      },
    });
  }
}

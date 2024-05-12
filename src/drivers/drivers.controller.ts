import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { Prisma } from '@prisma/client';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  create(@Body() createDriverDto: Prisma.DriverCreateInput) {
    return this.driversService.create(createDriverDto);
  }
}

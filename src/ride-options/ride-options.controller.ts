import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RideOptionsService } from './ride-options.service';

@Controller('ride-options')
export class RideOptionsController {
  constructor(private readonly rideOptionsService: RideOptionsService) {}

  @Get()
  findAll() {
    return this.rideOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rideOptionsService.findOne(+id);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getAllCountries() {
    const countries = await this.countriesService.getCountries();
    return countries;
  }

  @Get(':country/cities')
  async getCities(@Param('country') country: string) {
    const cities = await this.countriesService.getCities(country);
    return cities;
  }
}

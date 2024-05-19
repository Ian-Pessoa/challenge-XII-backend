import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private httpService: HttpService) {}

  async getCountries(): Promise<string[]> {
    try {
      const response: AxiosResponse<any> = await firstValueFrom(this.httpService.get('https://countriesnow.space/api/v0.1/countries'));
      return response.data.data.map(country => country.country);
    } catch (error) {
      throw new HttpException('Failed to fetch countries', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getCities(country: string): Promise<string[]> {
    try {
      const response: AxiosResponse<any> = await firstValueFrom(this.httpService.post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: country,
      }));
      return response.data.data;
    } catch (error) {
      throw new HttpException('Failed to fetch cities', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}

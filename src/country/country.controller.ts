import { Controller,Get } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller()
export class CountryController {

    constructor(private readonly countryService: CountryService) {}

    @Get('country')
    getCountry() {
      return this.countryService.findAll();
    }
}

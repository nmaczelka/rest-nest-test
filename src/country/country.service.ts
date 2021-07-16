import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from '../entity/country.entity';

@Injectable()
export class CountryService {


    constructor(
        @InjectRepository(Country)
        private countryRepository: Repository<Country>,
      ) {}
    
      async findAll(): Promise<Country[]> {
        console.log("dasdas")
        return await this.countryRepository.find();
      }
    
      findOne(id: number): Promise<Country> {
        return this.countryRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await await this.countryRepository.delete(id);
      }
}

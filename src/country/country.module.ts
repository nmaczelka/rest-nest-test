import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from './country.controller';
import { Country } from '../entity/country.entity';
import { CountryService } from './country.service';

@Module({
    providers: [CountryService],
    imports: [TypeOrmModule.forFeature([Country])],
    controllers: [CountryController]
})
export class CountryModule {}
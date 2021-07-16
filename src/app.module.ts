import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryService } from './country/country.service';
import { CountryController } from './country/country.controller';
import { CountryModule } from './country/country.module';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {config} from './orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config), CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

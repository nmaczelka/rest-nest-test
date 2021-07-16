import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: '10.77.65.65',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'test',
        schema: 'test',
        logging: true,
        //entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
        entities:['dist/**/*.entity.js'],
        synchronize: true,
        // ssl: true,
        // extra: {
        // ssl: {
        //     rejectUnauthorized: false,
        // },
        // },
      }),
    ],
  })
export class DatabaseModule {}
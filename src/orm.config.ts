import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
        host: '10.77.65.65',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'fullstack_db',
        logging: true,
        //entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
        entities:['dist/**/*.entity.js'],
        synchronize: true,
}
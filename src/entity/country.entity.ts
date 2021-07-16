import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Country {

    // @PrimaryGeneratedColumn()
    @PrimaryGeneratedColumn()
    ID: number;
  
    @Column({ type: 'varchar'})
    COUNTRY_CODE: string;
  
    @Column({ type: 'varchar'})
    COUNTRY_NAME: string;
  
    // @Column()
    // localizationCode: string;

    // @Column({ default: true })
    // ignoreLeadingZeros: boolean;

    // @Column({ default: true })
    // isStateRequired: boolean;

    // @Column({ default: true })
    // fullStateNameRequired: boolean;

    // @Column({ default: true })
    // hashMask: boolean;
    
}
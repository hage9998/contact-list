import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Contacts extends BaseEntity{

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column()
    name!: string;

    @Column()
    phone!: number;

    @Column()
    age!: number;
}
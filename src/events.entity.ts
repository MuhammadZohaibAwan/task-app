import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('event')
export class EventsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @Column()
    when: Date;

    @Column()
    address: string;
}
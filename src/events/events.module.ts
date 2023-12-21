import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsEntity } from './events.entity';
import { EventsController } from './event.controller';

@Module({
    imports: [
TypeOrmModule.forFeature([EventsEntity])
    ],
    controllers: [EventsController],
    providers: [],
})
export class EventsModule {}

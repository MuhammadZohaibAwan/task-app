import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsEntity } from './events.entity';
import { EventsController } from './event.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([EventsEntity]),
    ],
    controllers: [EventsController],
    providers: [],
})
export class EventsModule {}
//fixed funcationality providing modules 
//dynamic modules : when you config tools like connection to db :app.module.ts
// forRoot sets up the database connection (like our base API URL). forFeature 
// then configures which entities to load for that connection, allowing modular and organized database management.

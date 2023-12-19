import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsEntity } from './events.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'secret',
    database: 'event',
    entities: [EventsEntity],
    synchronize: true
  }),
TypeOrmModule.forFeature([EventsEntity])
],
  controllers: [AppController,EventsController],
  providers: [AppService],
})
export class AppModule {}

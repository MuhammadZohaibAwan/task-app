import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsEntity } from './events/events.entity';
import { EventsModule } from './events/events.module';

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
EventsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsEntity } from './events/events.entity';
import { EventsModule } from './events/events.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal:true,
    // envFilePath: '.env' //we can change this to anything
    }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    // host: 'localhost',
    // port: 5432,
    host: process.env.DB_HOST,
    port:Number( process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [EventsEntity],
    synchronize: true
  }),
EventsModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


//modules are like boxes with specific tools 
//modules divie apps in sensable pieces 
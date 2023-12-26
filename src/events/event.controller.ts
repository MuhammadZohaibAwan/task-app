import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { CreateEventsDto } from "./createEvents.dto";
import { UpdateEventDto } from "./updateEvent.dto";
import { EventsEntity } from "./events.entity";
import { MoreThan, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Controller('events') // Added route prefix for all endpoints in this controller
export class EventsController {

    constructor(
        @InjectRepository(EventsEntity)
        private readonly repository: Repository<EventsEntity>
    ) {}

    @Get()
    async findAll() { 
        // console.log(process.env.DB_HOST)
        return await this.repository.find();
    }

    // @Get('/practise')
    // async practice() {
    //     return await this.repository.find({
    //         where: {id: MoreThan(2)}
    //     });
    // }

   // take:2 //limit 
   // skip : 2 //off-set

    @Get(':id')
    async findOne(@Param('id') id) {
        return await this.repository.findOne({where: {id}});
    }

    @Post()
    async create(@Body() input: CreateEventsDto) {
        const newEvent = await this.repository.save({
            ...input,
            when: new Date(input.when)
        });
        return newEvent;
    }

    @Patch(':id') // Added parameter decorator for ID
    async update(@Param('id') id, @Body() input: UpdateEventDto) {
        const event = await this.repository.findOne({where: {id}});
        if (event) {
            const updatedEvent = {
                ...event,
                ...input,
                when: input.when ? new Date(input.when) : event.when 
            };
            await this.repository.save(updatedEvent);
            return updatedEvent;
        } else {
            throw new Error('Event not found');
        }
    }

    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id') id) {
        const event = await this.repository.findOne(id);
        if (event) {
            await this.repository.remove(event);
        } else {
            // Handle if event with provided ID is not found
            throw new Error('Event not found');
        }
    }

}

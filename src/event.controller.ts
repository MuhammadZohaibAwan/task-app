import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { CreateEventsDto } from "./createEvents.dto";
import { UpdateEventDto } from "./updateEvent.dto";
import { EventsEntity } from "./events.entity";


@Controller()
export class EventsController {

    private events: EventsEntity[] = [];

    @Get()
    findAll() { }
    @Get(':id')
    findOne(@Param('id') id) {
        const event = this.events.find((event) => {
            event.id === parseInt(id)
        })
        // return event
    }
    @Post()
    create(@Body() input: CreateEventsDto) {

        const event = {
            ...input,
            when: new Date(input.when),
            id: this.events.length + 1
        };
        this.events.push(event);

        return event
    }
    @Patch()
    update(@Param('id') id,@Body() input: UpdateEventDto) {

        const index = this.events.findIndex((event) => {
            event.id === parseInt(id)
        });

        this.events[index] = {
            ...this.events[index],
            ...input,
            // when: input.when ? new Date(input.when) : this.events[index]
            when : new Date()
        }
        return this.events[index]   

     }
    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id) {
        this.events = this.events.filter((event) => {
            event.id !== parseInt(id)
        })
    }
}


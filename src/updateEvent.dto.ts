import { PartialType } from "@nestjs/mapped-types";
import { CreateEventsDto } from "./createEvents.dto";

export class UpdateEventDto extends PartialType(CreateEventsDto){

}

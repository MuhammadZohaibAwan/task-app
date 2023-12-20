import { IsString,IsDateString, Length, isString } from "class-validator";

// global validation = main.ts enabled + add validation inside dto
// validation can be grouped or can be global
// (@Body(new ValidationPipe({groups:['create']}))) + disable global validation while using local validation
//@UsePipe = on controller specific router e;g @Get or on class level if you use it class level

export class CreateEventsDto {
    @IsString()
    @Length(5,255,{message: 'The name length is wrong'})//length of name to 5-255 validation pipe
    name: string;
    @Length(5,255)
    description: string;
    @IsDateString()
    when: string;
    @Length(5,255)
    address: string;
}
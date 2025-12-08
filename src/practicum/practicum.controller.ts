import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PracticumService } from './practicum.service';
import { PracticumDTO } from './dto/practicum.dto';

@Controller('practicum')
export class PracticumController {
    constructor(
        private service: PracticumService
    ){}

    @HttpCode(HttpStatus.CREATED)
    @Post("register")
    async Register(@Body() body:PracticumDTO){
        return this.service.Register(body)
    }
}

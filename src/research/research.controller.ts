import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ResearchService } from './research.service';
import { ResearchDTO } from './dto/research.dto';

@Controller('research')
export class ResearchController {
    constructor(private readonly service:ResearchService){}

    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    async Register(@Body() body:ResearchDTO){
        return this.service.Register(body)
    }
}

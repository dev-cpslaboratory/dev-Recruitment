import { Module } from '@nestjs/common';
import { PracticumController } from './practicum.controller';
import { PracticumService } from './practicum.service';
import { DatabaseModule } from '../database/database.module';
import { ResearchModule } from '../research/research.module';

@Module({
    providers:[PracticumService],
    controllers: [PracticumController],
    imports:[DatabaseModule, ResearchModule]
})
export class PracticumModule {}

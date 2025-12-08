import { Module } from '@nestjs/common';
import { ResearchService } from './research.service';
import { ResearchController } from './research.controller';
import { ResearchRepository } from './research.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports:[DatabaseModule],
    controllers:[ResearchController],
    providers:[ResearchService, ResearchRepository],
    exports:[ResearchRepository, ResearchService]
})
export class ResearchModule {
}

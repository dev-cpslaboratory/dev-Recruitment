import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResearchService } from './research/research.service';
import { ResearchController } from './research/research.controller';
import { DatabaseService } from './database/database.service';
import { ResearchModule } from './research/research.module';
import { DatabaseModule } from './database/database.module';
import { PracticumService } from './practicum/practicum.service';
import { PracticumModule } from './practicum/practicum.module';

@Module({
  imports: [ResearchModule, DatabaseModule, PracticumModule],
  controllers: [AppController, ResearchController],
  providers: [AppService, ResearchService, DatabaseService, PracticumService],
})
export class AppModule {}

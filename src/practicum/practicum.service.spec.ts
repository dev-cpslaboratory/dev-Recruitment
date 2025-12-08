import { Test, TestingModule } from '@nestjs/testing';
import { PracticumService } from './practicum.service';

describe('PracticumService', () => {
  let service: PracticumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PracticumService],
    }).compile();

    service = module.get<PracticumService>(PracticumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

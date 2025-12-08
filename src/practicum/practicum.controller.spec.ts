import { Test, TestingModule } from '@nestjs/testing';
import { PracticumController } from './practicum.controller';

describe('PracticumController', () => {
  let controller: PracticumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticumController],
    }).compile();

    controller = module.get<PracticumController>(PracticumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

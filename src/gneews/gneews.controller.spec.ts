import { Test, TestingModule } from '@nestjs/testing';
import { GneewsController } from './gneews.controller';

describe('GneewsController', () => {
  let controller: GneewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GneewsController],
    }).compile();

    controller = module.get<GneewsController>(GneewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

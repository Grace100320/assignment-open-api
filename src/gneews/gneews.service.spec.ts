import { Test, TestingModule } from '@nestjs/testing';
import { GneewsService } from './gneews.service';

describe('GneewsService', () => {
  let service: GneewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GneewsService],
    }).compile();

    service = module.get<GneewsService>(GneewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

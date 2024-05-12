import { Test, TestingModule } from '@nestjs/testing';
import { RideOptionsService } from './ride-options.service';

describe('RideOptionsService', () => {
  let service: RideOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RideOptionsService],
    }).compile();

    service = module.get<RideOptionsService>(RideOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RideOptionsController } from './ride-options.controller';
import { RideOptionsService } from './ride-options.service';

describe('RideOptionsController', () => {
  let controller: RideOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RideOptionsController],
      providers: [RideOptionsService],
    }).compile();

    controller = module.get<RideOptionsController>(RideOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { addressController } from './address.controller';
import { addressService } from './address.service';

describe('addressController', () => {
  let controller: addressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [addressController],
      providers: [addressService],
    }).compile();

    controller = module.get<addressController>(addressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

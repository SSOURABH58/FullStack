import { Test, TestingModule } from '@nestjs/testing';
import { BalanceSheetController } from './balance-sheet.controller';
import { HttpModule } from '@nestjs/axios';
import { BalanceSheetService } from './balance-sheet.service';

describe('BalanceSheetController', () => {
  let controller: BalanceSheetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [BalanceSheetController],
      providers: [BalanceSheetService],
    }).compile();

    controller = module.get<BalanceSheetController>(BalanceSheetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have a Get method', () => {
    expect(controller.getBalanceSheet).toBeDefined();
  });

  it('should return balance sheet', async () => {
    const data = controller.getBalanceSheet();
    expect(data).toBeDefined();
  });
});

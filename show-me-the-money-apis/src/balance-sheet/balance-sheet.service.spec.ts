import { Test, TestingModule } from '@nestjs/testing';
import { BalanceSheetService } from './balance-sheet.service';
import { HttpModule } from '@nestjs/axios';

describe('BalanceSheetService', () => {
  let service: BalanceSheetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [BalanceSheetService],
    }).compile();

    service = module.get<BalanceSheetService>(BalanceSheetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have getBalanceSheet method', () => {
    expect(service.getBalanceSheet).toBeDefined();
  });

  it('should return balance sheet', async () => {
    const data = service.getBalanceSheet();
    expect(data).toBeDefined();
  });
});

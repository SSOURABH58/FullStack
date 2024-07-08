import { Controller, Get } from '@nestjs/common';
import { BalanceSheetService } from './balance-sheet.service';

@Controller('balance-sheet')
export class BalanceSheetController {
  constructor(private readonly balanceSheetService: BalanceSheetService) {}
  @Get()
  async getBalanceSheet() {
    return this.balanceSheetService.getBalanceSheet();
  }
}

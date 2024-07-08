import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BalanceSheetModule } from './balance-sheet/balance-sheet.module';

@Module({
  imports: [BalanceSheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

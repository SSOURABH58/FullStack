import { HttpService } from '@nestjs/axios';
import { BadGatewayException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import 'dotenv/config';
import { catchError, map } from 'rxjs';

@Injectable()
export class BalanceSheetService {
  constructor(private readonly httpService: HttpService) {}
  getBalanceSheet() {
    return this.httpService.get(process.env.XERO_API).pipe(
      map((res: AxiosResponse) => res.data),
      catchError((error) => {
        console.log(error);

        throw new BadGatewayException(
          error?.response?.status
            ? `XERO request failed with error code: ${error?.response?.status}`
            : 'Failed to load Xero',
        );
      }),
    );
  }
}

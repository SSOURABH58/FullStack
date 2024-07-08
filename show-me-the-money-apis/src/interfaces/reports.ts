// Info form Xero dox  https://developer.xero.com/documentation/api/accounting/reports/#overview
// The layout of each report is a collection of rows and cells.
// Rows can be of various types (e.g. header, section, row and summary row elements).
//  Cells can contain values and attributes with nested values.

export interface Cell {
  Value: string;
  Attributes?: {
    [key: string]: any;
  };
}

export type RowType = 'Header' | 'Section' | 'Row' | 'SummaryRow';

export interface Row {
  RowType: RowType;
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

export interface Report {
  Rows: Row[];
  [key: string]: any;
}

export interface BalanceSheetResponse {
  Reports: Report[];
  Status: string;
}

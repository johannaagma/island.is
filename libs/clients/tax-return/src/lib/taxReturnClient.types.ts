interface TaxReturnEntry {
  fieldNumber: number
  data?: object
  amount: number
}

export interface TaxReturn {
  id: string
  entries: TaxReturnEntry[]
}

export interface FinancialOverview {
  id: string
  //TODO
}

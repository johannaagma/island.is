import { getValueViaPath } from '@island.is/application/core'

const FieldMapper = {
  'income.salaryIncome': 21,
  'income.otherIncome': 23,
  domesticProperties: 314,
  cars: 6,
  'propertyLoan.interest': 87,
  'propertyLoan.balance': 45,
  'otherDebt.interestPayments': 88,
  'otherDebt.remainingAmount': 168,
}
export const getFieldNumber = (answersField: string) => {
  return getValueViaPath<number>(FieldMapper, answersField)
}

import { getValueViaPath } from '@island.is/application/core'

const FieldMapper = {
  'income.salaryIncome': 21,
  'income.otherIncome': 23,
  'income.educationGrants': 131,
  'income.fitnessGrants': 96,
  'otherAssets.domesticProperties': 314,
  'otherAssets.cars': 6,
  'propertyLoan.interest': 87,
  'propertyLoan.balance': 45,
  'otherDebt.interest': 88,
  'otherDebt.balance': 168,
}
export const getFieldNumber = (answersField: string) => {
  return getValueViaPath<number>(FieldMapper, answersField, 0) || 0
}

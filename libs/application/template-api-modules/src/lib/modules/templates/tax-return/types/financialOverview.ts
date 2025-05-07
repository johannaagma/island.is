export type Entry = {
  fieldSectionNumber: string
  fieldSectionName: string
  fieldNumber: number
  fieldName?: string
  data?: any
  amount: number
}

export type OtherDebtProps = {
  fieldSectionNumber: string
  fieldSectionName: string
  fieldNumber: number
  fieldName?: string
  data: { description: string; id: string }
  amount: number
}

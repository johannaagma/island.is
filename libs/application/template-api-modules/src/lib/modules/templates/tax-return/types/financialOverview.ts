export type Field = {
  canAddEntry: boolean
  canEditEntry: boolean
  fieldName: string
  fieldNumber: number
  order: number
  year: string
}

export type Entry = {
  amount: number
  data: any
  field: any
}

export type OtherDebtProps = {
  field: Field
  data: { description: string; id: string }
  amount: number
}

import { OtherDebtProps } from '../types/financialOverview'

export const groupOtherDebtsById = (data: Array<OtherDebtProps>) => {
  const map = new Map()

  data.forEach((item) => {
    const desc = item.data.description
    if (!map.has(desc)) {
      map.set(desc, [])
    }
    map.get(desc).push(item)
  })

  return Array.from(map.values())
}

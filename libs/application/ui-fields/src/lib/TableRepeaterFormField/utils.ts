import { RepeaterItem } from '@island.is/application/types'
import { coreMessages } from '@island.is/application/core'
import * as kennitala from 'kennitala'

type Item = {
  id: string
} & RepeaterItem

export type Value<T> = { [key: string]: T }

export const formatIsk = (value: number): string =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' kr.'

export const handleCustomStaticValues = <T>(
  tableItems: Array<Item>,
  staticData: Array<Record<string, string>>,
) => {
  return tableItems.reduce((acc, item) => {
    if (item.component === 'input' && item.currency) {
      return handleCurrency(item, acc)
    }
    return acc
  }, staticData as Array<Value<T>>)
}

export const handleCustomMappedValues = <T>(
  tableItems: Array<Item>,
  values: Array<Value<T>>,
) => {
  // Iterate over tableItems and handle items with nationalIdWithName component
  return tableItems.reduce((acc, item) => {
    if (item.component === 'nationalIdWithName') {
      return handleNationalIdWithNameItem(item, values)
    }
    if (item.component === 'input' && item.currency) {
      return handleCurrency(item, acc)
    }
    return acc
  }, values as Array<Value<T>>)
}

const handleCurrency = <T>(item: Item, values: Array<Value<T>>) => {
  if (!values?.length) {
    return []
  }

  const newValues = values.map((value) => {
    if (value[item.id]) {
      const { [item.id]: nestedObject, ...rest } = value
      const formattedCurrency = formatIsk(nestedObject as number)
      return {
        [item.id]: formattedCurrency as T,
        ...rest,
      }
    }
    return value
  })

  return newValues
}

const handleNationalIdWithNameItem = <T>(
  item: Item,
  values: Array<Value<T>>,
) => {
  if (!values?.length) {
    return []
  }

  // nationalIdWithName is a special case where the value is an object
  // with a nested object inside it. This function will extract the nested
  // object and merge it with the rest of the values.
  const newValues = values.map((value) => {
    if (!!value[item.id] && typeof value[item.id] === 'object') {
      const { [item.id]: nestedObject, ...rest } = value
      const formattedNationalId = kennitala.format(
        (nestedObject as { nationalId: string })?.nationalId,
      )
      return {
        ...nestedObject,
        nationalId: formattedNationalId as T,
        ...rest,
      }
    }
    return value
  })

  return newValues
}

export const buildDefaultTableHeader = (items: Array<RepeaterItem>) =>
  items
    .map((item) =>
      // nationalIdWithName is a special case where the value is an object of name and nationalId
      item.component === 'nationalIdWithName'
        ? [coreMessages.name, coreMessages.nationalId]
        : item.label,
    )
    .flat(2)

export const buildDefaultTableRows = (
  items: Array<RepeaterItem & { id: string }>,
) =>
  items
    .map((item) =>
      // nationalIdWithName is a special case where the value is an object of name and nationalId
      item.component === 'nationalIdWithName'
        ? ['name', 'nationalId']
        : item.id,
    )
    .flat(2)

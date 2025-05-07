import {
  FieldBaseProps,
  FieldComponents,
  FieldTypes,
} from '@island.is/application/types'
import { FC } from 'react'
import { TableRepeaterFormField } from '@island.is/application/ui-fields'
import { deFormatIsk, formatIsk } from '../../utils/formatIsk'
import {
  Accordion,
  AccordionItem,
  Box,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import { getValueViaPath } from '@island.is/application/core'

export const CarTable: FC<FieldBaseProps> = ({ application }) => {
  return (
    <Accordion>
      <AccordionItem
        key={`accordion-item-cars`}
        id={`accordion-item-cars`}
        label={
          <Box display="flex" flexDirection="row">
            <Tag variant="purple">4.3</Tag>
            <Box paddingLeft={2}>
              <Text variant="h4">Bifreiðar</Text>
            </Box>
          </Box>
        }
        startExpanded
      >
        <TableRepeaterFormField
          application={application}
          field={{
            id: 'assets.cars',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            editField: true,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
              let totalValue = 0
              const updatedValue = updatedValues.assets?.cars?.reduce(
                (acc: number, item: { price: string }) => {
                  if (item.price) {
                    return acc + deFormatIsk(item.price)
                  }
                  return acc
                },
                0,
              )

              if (staticData) {
                const staticDataValue = staticData.reduce(
                  (acc: number, item: Record<string, any>) => {
                    if (item.price) {
                      return acc + deFormatIsk(item.price)
                    }
                    return acc
                  },
                  0,
                )
                totalValue = updatedValue + staticDataValue
              }
              return {
                items: [
                  '',
                  'Samtals bifreiðar',
                  '',
                  <Box
                    // background={'dark100'}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="spaceBetween"
                  >
                    <Text
                      whiteSpace="nowrap"
                      variant="small"
                      fontWeight="semiBold"
                    >
                      {formatIsk(totalValue)}
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>06</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            getStaticTableData: (_application) => {
              const carData = getValueViaPath<Array<any>>(
                _application.externalData,
                'getFinancialOverview.data.cars',
                [],
              )
              const tableData = carData?.map((item) => {
                return {
                  carNumber: item.data?.permno || '',
                  year: item.data?.purchaseYear || '',
                  price: item.amount?.toString() || '0',
                }
              })
              return tableData || []
            },
            fields: {
              carNumber: {
                component: 'input',
                label: 'Fastanúmer',
                width: 'half',
                size: 'sm',
              },
              year: {
                component: 'input',
                label: 'Kaupár',
                width: 'half',
                size: 'sm',
              },
              price: {
                component: 'input',
                type: 'number',
                label: 'Kaupverð',
                width: 'half',
                size: 'sm',
                currency: true,
              },
            },
          }}
        ></TableRepeaterFormField>
      </AccordionItem>
    </Accordion>
  )
}

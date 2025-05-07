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

export const DomesticPropertiesTable: FC<FieldBaseProps> = ({
  application,
}) => {
  return (
    <Accordion>
      <AccordionItem
        key={`accordion-item-domestic-properties`}
        id={`accordion-item-domestic-properties`}
        label={
          <Box display="flex" flexDirection="row">
            <Tag variant="purple">4.1</Tag>
            <Box paddingLeft={2}>
              <Text variant="h4">Innlendar fasteignir</Text>
            </Box>
          </Box>
        }
        startExpanded
      >
        <TableRepeaterFormField
          application={application}
          field={{
            id: 'otherAssets.domesticProperties',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            editField: true,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
              let totalValue = 0
              const updatedValue =
                updatedValues.otherAssets?.domesticProperties?.reduce(
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
                  'Samtals fasteignir',
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
                      <Tag disabled>314</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            getStaticTableData: (_application) => {
              const propertyData = getValueViaPath<Array<any>>(
                _application.externalData,
                'getFinancialOverview.data.domesticProperties',
                [],
              )
              const tableData = propertyData?.map((item) => {
                return {
                  propertyNumber: item.data?.propertyNumber || '',
                  address: item.data?.address || '',
                  price: item.amount?.toString() || '0',
                }
              })
              return tableData || []
            },
            fields: {
              propertyNumber: {
                component: 'input',
                label: 'Fastanúmer eignar',
                width: 'half',
                size: 'sm',
              },
              address: {
                component: 'input',
                label: 'Staðsetning eignar',
                width: 'half',
                size: 'sm',
              },
              price: {
                component: 'input',
                type: 'number',
                label: 'Fasteignamat 2024',
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

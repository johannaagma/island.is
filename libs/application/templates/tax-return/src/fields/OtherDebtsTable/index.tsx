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

export const OtherDebtsTable: FC<FieldBaseProps> = ({ application }) => {
  return (
    <Accordion>
      <AccordionItem
        key={`accordion-item-other-debt`}
        id={`accordion-item-other-debt`}
        label={
          <Box display="flex" flexDirection="row">
            <Tag variant="purple">5.5</Tag>
            <Box paddingLeft={2}>
              <Text variant="h4">Aðrar skuldir og vaxtagjöld</Text>
            </Box>
          </Box>
        }
        startExpanded
      >
        <TableRepeaterFormField
          application={application}
          field={{
            id: 'debt.otherDebt',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            editField: true,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
              let totalInterestPayments = 0
              let totalRemainingValue = 0
              console.log('updatedValues', updatedValues)
              const updatedInterestPayments =
                updatedValues.debt?.otherDebt?.reduce(
                  (acc: number, item: { interestPayments: string }) => {
                    if (item.interestPayments) {
                      return acc + deFormatIsk(item.interestPayments)
                    }
                    return acc
                  },
                  0,
                )

              const updatedRemainingValue =
                updatedValues.debt?.otherDebt?.reduce(
                  (acc: number, item: { remainingAmount: string }) => {
                    if (item.remainingAmount) {
                      return acc + deFormatIsk(item.remainingAmount)
                    }
                    return acc
                  },
                  0,
                )

              console.log('staticData', staticData)

              if (staticData) {
                const staticDataInterestPayments = staticData.reduce(
                  (acc: number, item: Record<string, any>) => {
                    if (item.interestPayments) {
                      return acc + deFormatIsk(item.interestPayments)
                    }
                    return acc
                  },
                  0,
                )
                const staticDataRemainingValue = staticData.reduce(
                  (acc: number, item: Record<string, any>) => {
                    if (item.remainingAmount) {
                      return acc + deFormatIsk(item.remainingAmount)
                    }
                    return acc
                  },
                  0,
                )
                totalInterestPayments =
                  updatedInterestPayments + staticDataInterestPayments
                totalRemainingValue =
                  updatedRemainingValue + staticDataRemainingValue
              }
              return {
                items: [
                  '',
                  'Samtals',
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
                      {formatIsk(totalInterestPayments)}
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>88</Tag>
                    </Box>
                  </Box>,
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
                      {formatIsk(totalRemainingValue)}
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>168</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            getStaticTableData: (_application) => {
              const otherDebtsData = getValueViaPath<Array<any>>(
                _application.externalData,
                'getFinancialOverview.data.otherDebts',
                [],
              )
              const tableData = otherDebtsData?.map((item) => {
                return {
                  debtName: item[0].data?.description || '',
                  interestPayments:
                    item
                      .filter((x: any) => x.fieldNumber === 88)[0]
                      ?.amount?.toString() || '0',
                  remainingAmount:
                    item
                      .filter((x: any) => x.fieldNumber === 168)[0]
                      ?.amount?.toString() || '0',
                }
              })
              return tableData || []
            },
            fields: {
              debtName: {
                component: 'input',
                label: 'Skuld',
                width: 'third',
                size: 'sm',
              },
              interestPayments: {
                component: 'input',
                type: 'number',
                label: 'Vaxtagjöld',
                width: 'third',
                size: 'sm',
                currency: true,
              },
              remainingAmount: {
                component: 'input',
                type: 'number',
                label: 'Eftirstöðvar',
                width: 'third',
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

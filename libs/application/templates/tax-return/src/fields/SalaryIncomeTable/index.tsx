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

export const SalaryIncomeTable: FC<FieldBaseProps> = ({ application }) => {
  return (
    <Accordion>
      <AccordionItem
        key={`accordion-item-salary-income`}
        id={`accordion-item-salary-income`}
        label={
          <Box display="flex" flexDirection="row">
            <Tag variant="purple">2.1</Tag>
            <Box paddingLeft={2}>
              <Text variant="h4">Launatekjur og starfstengdar greiðslur</Text>
            </Box>
          </Box>
        }
        startExpanded
      >
        <TableRepeaterFormField
          application={application}
          field={{
            id: 'income.salaryIncome',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            editField: true,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
              let totalSalaryIncome = 0

              const updatedIncome = updatedValues.income?.salaryIncome?.reduce(
                (acc: number, item: { salaryAmount: string }) => {
                  return acc + deFormatIsk(item.salaryAmount)
                },
                0,
              )
              if (staticData) {
                const staticDataIncome = staticData.reduce(
                  (acc: number, item: Record<string, any>) => {
                    if (item.salaryAmount) {
                      return acc + deFormatIsk(item.salaryAmount)
                    }
                    return acc
                  },
                  0,
                )
                totalSalaryIncome = updatedIncome + staticDataIncome
              }
              return {
                items: [
                  '',
                  'Samtals launagreiðslur',
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
                      {formatIsk(totalSalaryIncome)}
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>21</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            getStaticTableData: (_application) => {
              const salaryData = getValueViaPath<Array<any>>(
                _application.externalData,
                'getFinancialOverview.data.salaryIncome',
                [],
              )
              const tableData = salaryData?.map((item) => {
                return {
                  companyNationalId: item.data?.nationalId || '',
                  companyName: item.data?.name || '',
                  salaryAmount: item.amount?.toString() || '0',
                }
              })
              return tableData || []
            },
            fields: {
              companyNationalId: {
                component: 'input',
                label: 'Kennitala launagreiðanda',
                width: 'half',
                size: 'sm',
              },
              companyName: {
                component: 'input',
                label: 'Nafn launagreiðanda',
                width: 'half',
                size: 'sm',
              },
              salaryAmount: {
                component: 'input',
                type: 'number',
                label: 'Laun',
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

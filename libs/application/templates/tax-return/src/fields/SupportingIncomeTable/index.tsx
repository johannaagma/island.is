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

export const SupportingIncomeTable: FC<FieldBaseProps> = ({ application }) => {
  return (
    <Accordion>
      <AccordionItem
        key={`accordion-item-supporting-income`}
        id={`accordion-item-supporting-income`}
        label={
          <Box display="flex" flexDirection="row">
            <Tag variant="purple">2.3</Tag>
            <Box paddingLeft={2}>
              <Text variant="h4">
                Lífeyrisgreiðslur, greiðslur frá Tryggingastofnun, aðrar
                bótagreiðslur, styrkir o.fl.
              </Text>
            </Box>
          </Box>
        }
        startExpanded
      >
        <Text>
          {`Hægt er að senda umsóknir og önnur gögn með pósti, tölvupósti eða
          faxi. Læknisvottorð verða að berast með pósti þar sem við þurfum
          frumritið.`}
        </Text>
        <TableRepeaterFormField
          application={application}
          field={{
            id: 'income.supportingIncome',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            editField: true,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
              let totalIncome = 0
              const updatedIncome =
                updatedValues.income?.supportingIncome?.reduce(
                  (acc: number, item: { payment: string }) => {
                    if (item.payment) {
                      return acc + deFormatIsk(item.payment)
                    }
                    return acc
                  },
                  0,
                )

              if (staticData) {
                const staticDataIncome = staticData.reduce(
                  (acc: number, item: Record<string, any>) => {
                    if (item.payment) {
                      return acc + deFormatIsk(item.payment)
                    }
                    return acc
                  },
                  0,
                )
                totalIncome = updatedIncome + staticDataIncome
              }
              return {
                items: [
                  '',
                  'Samtals greiðslur',
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
                      {formatIsk(totalIncome)}
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>40</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            getStaticTableData: (_application) => {
              return [
                {
                  companyName: 'Norðurljós Software ehf',
                  explanation: 'íþróttastyrkur',
                  payment: '75000',
                },
                {
                  companyName: 'VR',
                  explanation: 'Starfsmenntastyrkur',
                  payment: '900000',
                },
              ]
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              explanation: {
                component: 'input',
                label: 'Skýring',
                width: 'half',
                size: 'sm',
              },
              payment: {
                component: 'input',
                type: 'number',
                label: 'Greiðsla',
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

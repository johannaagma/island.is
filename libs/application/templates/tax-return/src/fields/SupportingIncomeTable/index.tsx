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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.alltlif',
            title: 'Lífeyrisgreiðslur og aðrar bótagreiðslur',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            maxRows: 0,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
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
                      0
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>40</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.almennlif',
            title: 'Greiðslur úr almennum lífeyrissjóðum',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            maxRows: 0,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
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
                      0
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>43</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.sereign',
            title: 'Lífeyrisgreiðslur úr séreignasjóðum',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            maxRows: 0,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
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
                      0
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>140</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.serstakir',
            title: 'Sérstök útgreiðsla séreignarsparnaðar',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            maxRows: 0,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
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
                      0
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>143</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.atvinnu',
            title: 'Atvinnuleysisbætur',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            maxRows: 0,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
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
                      0
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>163</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.felo',
            title:
              'Félagsleg aðstoð og aðrir styrkir og bætur frá sveitarfélögum',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            maxRows: 0,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
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
                      0
                    </Text>
                    <Box paddingLeft={2}>
                      <Tag disabled>197</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.educationGrants',
            title: 'Styrkir til náms, rannsóknar- og vísindastarfa',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            editField: true,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
              let totalIncome = 0
              const updatedIncome =
                updatedValues.income?.educationGrants?.reduce(
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
                      <Tag disabled>131</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            getStaticTableData: (_application) => {
              const educationGrantData = getValueViaPath<Array<any>>(
                _application.externalData,
                'getFinancialOverview.data.supportingIncome',
                [],
              )
              const filteredGrantData = educationGrantData?.filter(
                (x) => x.fieldNumber === 131,
              )
              const tableData = filteredGrantData?.map((item) => {
                return {
                  companyName: item.data?.name || '',
                  description: item.data?.description || '',
                  payment: item.amount?.toString() || '0',
                }
              })
              return tableData || []
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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
        <TableRepeaterFormField
          application={application}
          showFieldName
          field={{
            id: 'income.fitnessGrants',
            title: 'Annað: Líkamsræktarstyrkir o.fl.',
            component: FieldComponents.TABLE_REPEATER,
            children: undefined,
            type: FieldTypes.TABLE_REPEATER,
            editField: true,
            getFixedBottomRow: async ({ updatedValues, staticData }) => {
              let totalIncome = 0
              const updatedIncome = updatedValues.income?.fitnessGrants?.reduce(
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
                      <Tag disabled>96</Tag>
                    </Box>
                  </Box>,
                ],
              }
            },
            getStaticTableData: (_application) => {
              const fitnessGrantData = getValueViaPath<Array<any>>(
                _application.externalData,
                'getFinancialOverview.data.supportingIncome',
                [],
              )
              const filteredFitnessGrantData = fitnessGrantData?.filter(
                (x) => x.fieldNumber === 96,
              )
              const tableData = filteredFitnessGrantData?.map((item) => {
                return {
                  companyName: item.data?.name || '',
                  description: item.data?.description || '',
                  payment: item.amount?.toString() || '0',
                }
              })
              return tableData || []
            },
            fields: {
              companyName: {
                component: 'input',
                label: 'Nafn fyrirtækis',
                width: 'half',
                size: 'sm',
              },
              description: {
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

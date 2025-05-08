import { FieldBaseProps } from '@island.is/application/types'
import { FC, useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AlertMessage,
  Box,
  Button,
  GridColumn,
  GridContainer,
  GridRow,
  Tag,
  Text,
} from '@island.is/island-ui/core'
import {
  DatePickerController,
  InputController,
} from '@island.is/shared/form-fields'
import { useFormContext } from 'react-hook-form'
import { formatCurrency } from '@island.is/shared/utils'
import { UPDATE_APPLICATION } from '@island.is/application/graphql'
import { useMutation } from '@apollo/client'
import { useLocale } from '@island.is/localization'
import { getValueViaPath } from '@island.is/application/core'
import { PropertyLoanType } from '../../lib/dataSchema'

type LoanField = {
  data: {
    address: string
    lenderName: string
    loanNumber: string
    puchaseYear: string
    loanStartDate: string // ISO date format
    lenderNationalId: string
    loanPeriodInYears: number
    principalRepayment: number
    totalAnnualPayments: number
  }
  amount: number
  fieldName: string
  fieldNumber: number
  fieldSectionName: string
  fieldSectionNumber: string
}

const labels = [
  'Lánveitandi',
  'Kennitala lánveitanda',
  'Lánsnúmer',
  'Lántökudagur',
  'Lánstími ár',
  'Heildargreiðslur',
  'Afborgun á nafnverði',
  'Vaxtagjöld',
  'Eftirstöðvar',
]

interface InfoRowProps {
  items: string[]
}

const InfoBox: React.FC<InfoRowProps> = ({ items }) => (
  <Box border="standard" padding={1} marginTop={2} marginBottom={2}>
    {labels.map((label, index) => {
      let item = items[index] || '-'
      if (index > 4) {
        item = formatCurrency(parseInt(item))
      }
      return (
        <Box key={label} display={'flex'} flexDirection={'row'} margin={1}>
          <Box width="full">
            <Text fontWeight="semiBold">{label}</Text>
          </Box>
          <Box width="full">
            <Text>{item}</Text>
          </Box>
        </Box>
      )
    })}
  </Box>
)

const externalToLoanInfo = (data: LoanField[]) => {
  const item = data[0]
  return [
    item.data.lenderName,
    item.data.lenderNationalId,
    item.data.loanNumber,
    item.data.loanStartDate,
    item.data.loanPeriodInYears.toString(),
    item.data.totalAnnualPayments.toString(),
    item.data.principalRepayment.toString(),
    item.amount.toString(),
    data[1].amount.toString(),
  ]
}

const answerToLoanInfo = (data: PropertyLoanType[]) => {
  return data.map((item) => {
    return [
      item.loaner || '',
      item.loanerSSN || '',
      item.loanNumber?.toString() || '123123',
      item.loanDate || '',
      item.loanTime?.toString() || '01.01.2025',
      item.total?.toString() || '99999',
      item.installment?.toString() || '79999',
      item.interest?.toString() || '499900',
      item.balance?.toString() || '390000',
    ]
  })
}

export const ResidentialPropertyLoan: FC<FieldBaseProps> = ({
  application,
  setBeforeSubmitCallback,
}) => {
  const propertyData = getValueViaPath<LoanField[]>(
    application.externalData,
    'getFinancialOverview.data.domesticPropertyLoans',
  )
  const propertyDataAnswers = getValueViaPath<PropertyLoanType[]>(
    application.answers,
    'propertyLoan',
  )

  const data = externalToLoanInfo(propertyData || [])
  const dataAnswers = answerToLoanInfo(propertyDataAnswers || [])

  const [showInputs, setShowInputs] = useState<boolean>(false)
  const [loanInfo, setLoanInfo] = useState<string[][]>(() => {
    if (dataAnswers.length > 0) return dataAnswers
    else return [data]
  })
  const { getValues, setValue } = useFormContext()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [updateApplication] = useMutation(UPDATE_APPLICATION)
  const { locale } = useLocale()

  const mapToPropertyLoan = () => {
    return loanInfo.map((loan) => {
      return {
        loaner: loan[0],
        loanerSSN: loan[1],
        loanNumber: parseInt(loan[2]),
        loanDate: loan[3],
        loanTime: parseInt(loan[4]),
        total: parseInt(loan[5]),
        installment: parseInt(loan[6]),
        interest: parseInt(loan[7]),
        balance: parseInt(loan[8]),
      }
    })
  }

  const handleSave = () => {
    setShowInputs(false)
    const {
      loaner,
      loanerSSN,
      loanNumber,
      loanTime,
      total,
      installment,
      interest,
      balance,
      loanDate,
    } = getValues().propertyLoanNew

    const newList = [
      loaner,
      loanerSSN,
      loanNumber,
      loanDate,
      loanTime,
      total,
      installment,
      interest,
      balance,
    ]

    if (isEditing) {
      setLoanInfo((prev) => [prev[0], newList])
    } else {
      setLoanInfo((prev) => [...prev, newList])
    }

    setIsEditing(false)
  }

  setBeforeSubmitCallback?.(async () => {
    const loanList = mapToPropertyLoan()

    setValue('propertyLoan', loanList)

    await updateApplication({
      variables: {
        input: {
          id: application.id,
          answers: { propertyLoan: loanList },
        },
        locale,
      },
    })
    return [true, null]
  })

  const getTotalByIndex = (idx: number) => {
    let total = 0
    loanInfo.forEach((loan) => {
      total += parseInt(loan[idx])
    })
    return total
  }

  return (
    <Accordion>
      <AccordionItem
        key={`accordion-item-other-income`}
        id={`accordion-item-other-income`}
        label={
          <Box display="flex" flexDirection="row">
            <Tag variant="purple">5.2</Tag>
            <Box paddingLeft={2}>
              <Text variant="h4">Lán vegna íbúðarhúsnæðis</Text>
            </Box>
          </Box>
        }
        startExpanded
      >
        <Box marginTop={2}>
          <AlertMessage
            type="info"
            title={
              'Lán vegna kaupa eða byggingar íbúðarhúsnæðis til eigin nota.'
            }
            message={
              'Ef hluti lánsins var notaður í eitthvað annað en að kaupa eða byggja íbúðarhúsnæði, þarf að gefa upp hvaða hlutfall fór í íbúðarhúsnæði í reit númer 1. Í reitum 5 til 8 skráir þú heildarfjárhæðir lánsins en í dálkum 9 og 10 skaltu aðeins skrá þann hluta vaxtagjalda og eftirstöðva sem tengist íbúðarhúsnæðinu.'
            }
          />
        </Box>
        <Box marginTop={2}>
          <Text variant="h5">{`Staðsetning íbúðarhúsnæðis: Bláfjallagata 12`}</Text>{' '}
          {/* Saekja gotu i externalData */}
        </Box>

        {loanInfo.map((loan, index) => (
          <Box key={index}>
            {index > 0 && (
              <Box
                marginTop={2}
                marginBottom={2}
                display={'flex'}
                justifyContent={'flexEnd'}
              >
                <Button
                  colorScheme="default"
                  iconType="filled"
                  preTextIconType="filled"
                  variant="utility"
                  size="default"
                  icon="pencil"
                  onClick={(_) => {
                    setShowInputs(true)
                    setIsEditing(true)
                  }}
                >
                  Breyta upplýsingum
                </Button>
                <Box marginLeft={1}>
                  <Button
                    colorScheme="default"
                    iconType="filled"
                    preTextIconType="filled"
                    variant="utility"
                    size="default"
                    icon="trash"
                  >
                    Eyða upplýsingum
                  </Button>
                </Box>
              </Box>
            )}
            <InfoBox items={loan} />
          </Box>
        ))}
        <Box
          border="standard"
          padding={1}
          marginTop={2}
          marginBottom={2}
          style={{ backgroundColor: '#FAFAFA' }}
        >
          <Box display={'flex'} flexDirection={'row'} margin={1}>
            <Box width="full">
              <Text>{'Samtals vaxtagjöld'}</Text>
            </Box>
            <Box width="full" display={'flex'} justifyContent={'spaceBetween'}>
              <Text fontWeight="semiBold">
                {formatCurrency(getTotalByIndex(7))}
              </Text>
              <Tag disabled>87</Tag>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'row'} margin={1}>
            <Box width="full">
              <Text>{'Samtals eftirstöðvar'}</Text>
            </Box>
            <Box width="full" display={'flex'} justifyContent={'spaceBetween'}>
              <Text fontWeight="semiBold">
                {formatCurrency(getTotalByIndex(8))}
              </Text>
              <Tag disabled>45</Tag>
            </Box>
          </Box>
        </Box>

        {!showInputs && (
          <Box
            marginTop={2}
            marginBottom={2}
            display={'flex'}
            justifyContent={'flexEnd'}
          >
            <Button
              colorScheme="default"
              iconType="filled"
              preTextIconType="filled"
              size="default"
              variant="ghost"
              icon="add"
              onClick={(_) => setShowInputs(true)}
            >
              Bæta við láni
            </Button>
          </Box>
        )}
        {showInputs && (
          <GridContainer>
            <GridRow marginBottom={2} rowGap={1}>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  name="propertyLoanNew.loaner"
                  label="Lánveitandi"
                  type="text"
                  backgroundColor="blue"
                  id="debt.loaner"
                />
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  backgroundColor="blue"
                  name="propertyLoanNew.loanerSSN"
                  label="Kennitala lánveitanda"
                  type="text"
                  id="debt.loanerSSN"
                  format="######-####"
                />
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  backgroundColor="blue"
                  name="propertyLoanNew.loanNumber"
                  label="Lántökunúmer"
                  type="number"
                  id="debt.loaner_number"
                />
              </GridColumn>
            </GridRow>
            <GridRow marginBottom={2} rowGap={1}>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <DatePickerController
                  required
                  id={'debt.date'}
                  name="propertyLoanNew.loanDate"
                  backgroundColor={'blue'}
                  label={'Lántökudagur'}
                />
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  backgroundColor={'blue'}
                  name={'propertyLoanNew.loanTime'}
                  label="Lánstími ár"
                  type={'number'}
                  id={'debt.loanTime'}
                />
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  backgroundColor={'blue'}
                  name={'propertyLoanNew.total'}
                  label="Heildargreiðslur"
                  type={'number'}
                  id={'debt.total'}
                  currency={true}
                />
              </GridColumn>
            </GridRow>
            <GridRow marginBottom={2} rowGap={1}>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  id={'debt.installment'}
                  backgroundColor={'blue'}
                  name={'propertyLoanNew.installment'}
                  label="Afborgun á nafnverði"
                  type={'number'}
                  currency={true}
                />
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  id={'debt.interest'}
                  backgroundColor={'blue'}
                  name={'propertyLoanNew.interest'}
                  label="Vaxtagjöld"
                  type={'number'}
                  currency={true}
                />
              </GridColumn>
              <GridColumn span={['12/12', '12/12', '3/9']}>
                <InputController
                  required
                  id={'debt.balance'}
                  backgroundColor={'blue'}
                  name={'propertyLoanNew.balance'}
                  label="Eftirstöðvar"
                  type={'number'}
                  currency={true}
                />
              </GridColumn>
            </GridRow>
            <Box
              marginTop={2}
              marginBottom={2}
              display={'flex'}
              justifyContent={'flexEnd'}
            >
              <Button
                colorScheme="default"
                preTextIconType="filled"
                size="default"
                variant="ghost"
                onClick={(_) => setShowInputs(false)}
              >
                Hætta við
              </Button>
              <Box marginLeft={1}>
                <Button
                  colorScheme="default"
                  size="default"
                  onClick={handleSave}
                >
                  Skrá lán
                </Button>
              </Box>
            </Box>
          </GridContainer>
        )}
      </AccordionItem>
    </Accordion>
  )
}

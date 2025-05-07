import { FieldBaseProps } from '@island.is/application/types'
import { Box, Button, Text } from '@island.is/island-ui/core'
import { FC } from 'react'
import {
  DebtType,
  IncomeType,
  OtherAssetsType,
  PropertyLoanType,
} from '../../lib/dataSchema'
import { getValueViaPath } from '@island.is/application/core'
import { formatCurrency } from '@island.is/shared/utils'

interface InfoRowProps {
  label: string
  value: string
  isNotCurrency?: boolean
}

interface InfoRowTotalProps {
  label: string
  value: string
  isNotCurrency?: boolean
  noMargin?: boolean
}

interface InfoRowthreeValuesProps {
  label: string
  value: string
  secondLabel: string
}

interface InfoRowthreeValuesRightProps {
  label: string
  value: string
  secondValue: string
}

const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  isNotCurrency = false,
}) => (
  <Box display={'flex'} justifyContent={'spaceBetween'} marginBottom={1}>
    <Text>{label}</Text>
    {isNotCurrency && <Text>{value}</Text>}
    {!isNotCurrency && <Text>{formatCurrency(parseInt(value))}</Text>}
  </Box>
)

const InfoRowthreeValues: React.FC<InfoRowthreeValuesProps> = ({
  label,
  secondLabel,
  value,
}) => (
  <Box display={'flex'} justifyContent={'spaceBetween'} marginBottom={1}>
    <Box display={'flex'} width="full" justifyContent={'spaceBetween'}>
      <Text>{label}</Text>
      <Text>{secondLabel}</Text>
    </Box>
    <Box display={'flex'} width="full" justifyContent={'flexEnd'}>
      <Text>{formatCurrency(parseInt(value))}</Text>
    </Box>
  </Box>
)

const InfoRowthreeValuesRight: React.FC<InfoRowthreeValuesRightProps> = ({
  label,
  secondValue,
  value,
}) => (
  <Box display={'flex'} marginBottom={1}>
    <Box width="full">
      <Text>{label}</Text>
    </Box>
    <Box width={'full'}>
      <Box display={'flex'}>
        <Box display={'flex'} justifyContent={'flexEnd'} width={'full'}>
          <Text>{formatCurrency(parseInt(value))}</Text>
        </Box>
        <Box display={'flex'} justifyContent={'flexEnd'} width={'full'}>
          <Text>{formatCurrency(parseInt(secondValue))}</Text>
        </Box>
      </Box>
    </Box>
  </Box>
)

const InfoRowHeader: React.FC<{ title: string }> = ({ title }) => (
  <Box marginBottom={1}>
    <Text fontWeight="semiBold">{title}</Text>
  </Box>
)

const InfoRowTotal: React.FC<InfoRowTotalProps> = ({
  label,
  value,
  noMargin = false,
}) => (
  <Box
    display={'flex'}
    justifyContent={'spaceBetween'}
    marginBottom={noMargin ? 1 : 6}
  >
    <Text>{label}</Text>
    <Text fontWeight="semiBold">{formatCurrency(parseInt(value))}</Text>
  </Box>
)

export const Overview: FC<FieldBaseProps> = ({ application }) => {
  //const income = getValueViaPath<IncomeType>(application.answers, 'income')
  //   const otherAssets = getValueViaPath<OtherAssetsType>(
  //     application.answers,
  //     'otherAssets',
  //   )

  const income: IncomeType = {
    salaryIncome: [
      {
        companyNationalId: '', // Don't need
        companyName: 'Norðurljós Software ehf',
        salaryAmount: '9360000',
      },
      {
        companyNationalId: '', // Don't need
        companyName: 'Mús & Merki ehf.',
        salaryAmount: '900000',
      },
    ],
    otherIncome: [
      {
        typeOfPayment: 'Norðurljós Software ehf',
        payment: '75000',
      },
    ],
    supportingIncome: [
      {
        companyName: 'Norðurljós Software ehf',
        explanation: 'Íþróttastyrkur',
        payment: '75000',
      },
      {
        companyName: 'Mús & Merki ehf.',
        explanation: 'Starfsmenntastyrkur',
        payment: '130000',
      },
    ],
  }

  const otherAssets: OtherAssetsType = {
    domesticProperties: [
      {
        propertyNumber: '2109876',
        address: 'Bláfjallagata 12',
        price: '52000000',
      },
    ],
    cars: [
      {
        carNumber: 'KB521',
        year: '2021',
        price: '3100000',
      },
      {
        carNumber: 'JU329',
        year: '2012',
        price: '430000',
      },
    ],
  }

  const propertyLoan = getValueViaPath<PropertyLoanType[]>(
    application.answers,
    'propertyLoan',
  )

  //const debt = getValueViaPath<DebtType>(application.answers, 'debt')
  const debt: DebtType = {
    otherDebt: [
      {
        debtName: 'Eftirstöðvar á korti númer: 4469 88XX XXXX 4567',
        interestPayments: '39200',
        remainingAmount: '217000',
      },
      {
        debtName: 'Aukalán',
        interestPayments: '86000',
        remainingAmount: '980000',
      },
      {
        debtName: '0142-26-732645 Varðan',
        interestPayments: '14500',
        remainingAmount: '62000',
      },
      {
        debtName: 'Kílómetragjald, Skatturinn',
        interestPayments: '0',
        remainingAmount: '2370',
      },
      {
        debtName: 'Þing- og sveitarsjóðsgjöld, Skatturinn',
        interestPayments: '224',
        remainingAmount: '0',
      },
    ],
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'spaceBetween'} marginBottom={6}>
        <Text variant="h3">Tekjur ársins 2024</Text>
        <Button
          colorScheme="default"
          iconType="filled"
          preTextIconType="filled"
          variant="utility"
          size="default"
          icon="pencil"
        >
          Breyta upplysingum
        </Button>
      </Box>
      <Box marginBottom={1}>
        <Text fontWeight="semiBold">
          Launatekjur og starfstengdar greiðslur
        </Text>
      </Box>

      {/* Loop this */}
      {income &&
        income.salaryIncome &&
        income.salaryIncome.map((inc, index) => {
          return (
            <InfoRow
              key={index}
              label={inc?.companyName || ''}
              value={inc?.salaryAmount || ''}
            />
          )
        })}
      {income && income.salaryIncome && (
        <InfoRowTotal
          label={'Samtals launagreiðslur'}
          value={income.salaryIncome
            .reduce(
              (total, item) => total + parseInt(item?.salaryAmount || '0') || 0,
              0,
            )
            .toString()}
        />
      )}

      <Box marginBottom={1}>
        <Text fontWeight="semiBold">
          Ökutækjastyrkur, dagpeningar og hlunnindi
        </Text>
      </Box>

      {/* Loop this */}
      {income &&
        income.supportingIncome &&
        income.supportingIncome.map((inc, index) => {
          return (
            <InfoRowthreeValues
              key={index}
              label={inc?.companyName || ''}
              secondLabel={inc?.explanation || ''}
              value={inc?.payment || ''}
            />
          )
        })}
      {income && income.supportingIncome && (
        <InfoRowTotal
          label={'Samtals launagreiðslur'}
          value={income.supportingIncome
            .reduce(
              (total, item) => total + parseInt(item?.payment || '0') || 0,
              0,
            )
            .toString()}
        />
      )}

      <Box marginBottom={1}>
        <Text fontWeight="semiBold">Aðrar greiðslur</Text>
      </Box>

      {/* Loop this */}
      {income &&
        income.otherIncome &&
        income.otherIncome.map((inc, index) => {
          return (
            <InfoRow
              key={index}
              label={inc?.typeOfPayment || ''}
              value={inc?.payment || ''}
            />
          )
        })}
      {income && income.otherIncome && (
        <InfoRowTotal
          label={'Samtals launagreiðslur'}
          value={income.otherIncome
            .reduce(
              (total, item) => total + parseInt(item?.payment || '0') || 0,
              0,
            )
            .toString()}
        />
      )}
      <Box marginY={4} borderBottomWidth="standard" borderColor="blue100"></Box>

      <Box display={'flex'} justifyContent={'spaceBetween'} marginBottom={6}>
        <Text variant="h3">Eignir ársins 2024</Text>
        <Button
          colorScheme="default"
          iconType="filled"
          preTextIconType="filled"
          variant="utility"
          size="default"
          icon="pencil"
        >
          Breyta upplysingum
        </Button>
      </Box>

      {otherAssets &&
        otherAssets.domesticProperties &&
        otherAssets.domesticProperties.map((asset, index) => {
          return (
            <InfoRowthreeValues
              key={index}
              label={asset?.propertyNumber || ''}
              value={asset?.price || '0'}
              secondLabel={asset?.address || ''}
            />
          )
        })}
      {otherAssets && otherAssets.domesticProperties && (
        <InfoRowTotal
          label={'Samtals launagreiðslur'}
          value={otherAssets.domesticProperties
            .reduce(
              (total, item) => total + parseInt(item?.price || '0') || 0,
              0,
            )
            .toString()}
        />
      )}

      {otherAssets &&
        otherAssets.cars &&
        otherAssets.cars.map((asset, index) => {
          return (
            <InfoRowthreeValues
              key={index}
              label={asset?.carNumber || ''}
              value={asset?.price || '0'}
              secondLabel={asset?.year || ''}
            />
          )
        })}
      {otherAssets && otherAssets.cars && (
        <InfoRowTotal
          label={'Samtals launagreiðslur'}
          value={otherAssets.cars
            .reduce(
              (total, item) => total + parseInt(item?.price || '0') || 0,
              0,
            )
            .toString()}
        />
      )}

      <Box marginY={4} borderBottomWidth="standard" borderColor="blue100"></Box>

      <Box display={'flex'} justifyContent={'spaceBetween'} marginBottom={6}>
        <Text variant="h3">Skuldir og vaxtagjöld</Text>
        <Button
          colorScheme="default"
          iconType="filled"
          preTextIconType="filled"
          variant="utility"
          size="default"
          icon="pencil"
        >
          Breyta upplysingum
        </Button>
      </Box>

      <InfoRowHeader title={'Staðsetning íbúðarhúsnæðis: Bláfjallagata 12'} />
      {propertyLoan?.map((loan, index) => {
        return (
          <Box marginY={2} key={index}>
            <InfoRow
              label={'Lánveitandi'}
              value={loan.loaner || ''}
              isNotCurrency
            />
            <InfoRow
              label={'Kennitala lánveitanda'}
              value={loan.loanerSSN || ''}
              isNotCurrency
            />
            <InfoRow
              label={'Lánsnúmer'}
              value={loan.loanNumber?.toString() || ''}
              isNotCurrency
            />
            <InfoRow label={'Lántökudagur'} value={loan.loanDate || ''} />
            <InfoRow
              label={'Lánstími'}
              value={loan.loanTime?.toString() || ''}
              isNotCurrency
            />
            <InfoRow
              label={'Heildargreiðslur'}
              value={loan.total?.toString() || ''}
            />
            <InfoRow
              label={'Afborgun á nafnverði'}
              value={loan.installment?.toString() || ''}
            />
            <InfoRow
              label={'Vaxtagjöld'}
              value={loan.interest?.toString() || ''}
            />
            <InfoRow
              label={'Eftirstöðvar'}
              value={loan.balance?.toString() || ''}
            />
            <Box
              marginY={4}
              borderBottomWidth="standard"
              borderColor="blue100"
            ></Box>
          </Box>
        )
      })}
      <Box marginY={1} borderBottomWidth="standard" borderColor="blue100"></Box>
      {
        <InfoRowTotal
          noMargin={true}
          label={'Samtals vaxtagjöld'}
          value={
            propertyLoan
              ?.reduce((total, item) => total + (item?.interest || 0), 0)
              .toString() || '0'
          }
        />
      }
      {
        <InfoRowTotal
          label={'Samtals eftirstöðvar'}
          value={
            propertyLoan
              ?.reduce((total, item) => total + (item?.balance || 0), 0)
              .toString() || '0'
          }
        />
      }
      {debt &&
        debt.otherDebt &&
        debt.otherDebt.map((d) => {
          return (
            <InfoRowthreeValuesRight
              label={d.debtName || ''}
              value={d.interestPayments || ''}
              secondValue={d.remainingAmount || ''}
            />
          )
        })}
      <Box display={'flex'} marginBottom={1}>
        <Box width="full">
          <Text>Samtals vaxta greiðslur</Text>
        </Box>
        <Box width={'full'}>
          <Box display={'flex'}>
            <Box display={'flex'} justifyContent={'flexEnd'} width={'full'}>
              <Text fontWeight="semiBold">
                {formatCurrency(
                  parseInt(
                    debt?.otherDebt
                      .reduce(
                        (total, item) =>
                          total + parseInt(item?.interestPayments || '0'),
                        0,
                      )
                      .toString() || '0',
                  ),
                )}
              </Text>
            </Box>
            <Box display={'flex'} justifyContent={'flexEnd'} width={'full'}>
              <Text>{''}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={'flex'} marginBottom={1}>
        <Box width="full">
          <Text>Samtals greiðslur eftir</Text>
        </Box>
        <Box width={'full'}>
          <Box display={'flex'}>
            <Box display={'flex'} justifyContent={'flexEnd'} width={'full'}>
              <Text>{''}</Text>
            </Box>
            <Box display={'flex'} justifyContent={'flexEnd'} width={'full'}>
              <Text fontWeight="semiBold">
                {formatCurrency(
                  parseInt(
                    debt?.otherDebt
                      .reduce(
                        (total, item) =>
                          total + parseInt(item?.remainingAmount || '0'),
                        0,
                      )
                      .toString() || '0',
                  ),
                )}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

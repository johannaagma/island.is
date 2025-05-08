import { ExternalData } from '@island.is/application/types'
import { FormValue } from '@island.is/application/types'
import { getValueViaPath } from '@island.is/application/core'
import { KeyValueItem } from '@island.is/application/types'
import kennitala from 'kennitala'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

const formatKennitala = (nationalId: string | undefined): string => {
  if (!nationalId) return ''
  return kennitala.format(nationalId)
}

const formatPhoneNumber = (phoneNumber: string | undefined): string => {
  if (!phoneNumber) return ''
  const phone = parsePhoneNumberFromString(phoneNumber, 'IS')
  return phone?.formatNational() || phoneNumber
}

export const getApplicantForOverview = (
  _answers: FormValue,
  externalData: ExternalData,
): Array<KeyValueItem> => {
  const individual = getValueViaPath<any>(externalData, 'individual.data')

  return [
    {
      width: 'full',
      valueText: [
        {
          id: '1',
          defaultMessage: individual?.name,
        },
        {
          id: '2',
          defaultMessage: formatKennitala(individual?.nationalId),
        },
        {
          id: '3',
          defaultMessage: `${individual?.address}, ${individual?.postalCode} ${individual?.city}`,
        },
        {
          id: '4',
          defaultMessage: formatPhoneNumber(individual?.phone),
        },
        {
          id: '5',
          defaultMessage: individual?.email,
        },
      ],
    },
  ]
}

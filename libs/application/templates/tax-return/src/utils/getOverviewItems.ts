import { ExternalData } from '@island.is/application/types'

import { FormValue } from '@island.is/application/types'

import { getValueViaPath } from '@island.is/application/core'
import { KeyValueItem } from '@island.is/application/types'
import { ApplicantType } from '../lib/dataSchema'

export const getApplicantForOverview = (
  answers: FormValue,
  _externalData: ExternalData,
): Array<KeyValueItem> => {
  const applicant = getValueViaPath<ApplicantType>(
    answers,
    'applicantInformation',
  )
  return [
    {
      width: 'full',
      valueText: [
        {
          id: '1',
          defaultMessage: applicant?.name,
        },
        {
          id: '2',
          defaultMessage: applicant?.nationalId,
        },
        {
          id: '3',
          defaultMessage: 'Heimilisfang, postnumer borg',
        },
        {
          id: '4',
          defaultMessage: 'Sími: +3547781779 ...',
        },
        {
          id: '5',
          defaultMessage: 'Email@email.com',
        },
      ],
    },
  ]
}

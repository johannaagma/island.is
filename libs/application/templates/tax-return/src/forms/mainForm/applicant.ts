import {
  buildAlertMessageField,
  buildLinkField,
  buildMultiField,
  buildPhoneField,
  buildSection,
  buildTextField,
  getValueViaPath,
} from '@island.is/application/core'

import { Application } from '@island.is/application/types'

export const applicantSection = buildSection({
  id: 'applicantInformation',
  title: 'Umsækjandi',
  children: [
    buildMultiField({
      id: 'applicantInformationMultiField',
      title: 'Umsækjandi',
      description:
        'Vinsamlegast leiðréttið eftirfarandi upplýsingar ef þörf er á',
      children: [
        buildTextField({
          id: 'applicantInformation.name',
          title: 'Fullt nafn',
          backgroundColor: 'white',
          width: 'full',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application
            const name = getValueViaPath<string>(
              externalData,
              'individual.data.name',
            )

            return name
          },
        }),
        buildTextField({
          id: 'applicantInformation.nationalId',
          title: 'Kennitala',
          backgroundColor: 'white',
          width: 'half',
          readOnly: true,
          format: '######-####',
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application
            const nationalId = getValueViaPath<string>(
              externalData,
              'individual.data.nationalId',
            )
            return nationalId
          },
        }),
        buildTextField({
          id: 'applicantInformation.address',
          title: 'Heimili',
          backgroundColor: 'white',
          width: 'half',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application
            const address = getValueViaPath<string>(
              externalData,
              'individual.data.address',
            )
            return address
          },
        }),
        buildTextField({
          id: 'applicantInformation.postcode',
          title: 'Póstnúmer',
          backgroundColor: 'white',
          width: 'half',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application
            const postalCode = getValueViaPath<string>(
              externalData,
              'individual.data.postalCode',
            )
            return postalCode
          },
        }),
        buildTextField({
          id: 'applicantInformation.municipality',
          title: 'Sveitarfélag',
          backgroundColor: 'white',
          width: 'half',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application
            const city = getValueViaPath<string>(
              externalData,
              'individual.data.city',
            )
            return city
          },
        }),
        buildTextField({
          id: 'applicantInformation.email',
          title: 'Netfang',
          backgroundColor: 'white',
          width: 'half',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application
            const email = getValueViaPath<string>(
              externalData,
              'individual.data.email',
            )
            return email
          },
        }),
        buildPhoneField({
          id: 'applicantInformation.phoneNumber',
          title: 'Símanúmer',
          backgroundColor: 'white',
          width: 'half',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application
            const phone = getValueViaPath<string>(
              externalData,
              'individual.data.phone',
            )
            return phone
          },
        }),
        buildAlertMessageField({
          id: 'applicationInfoEmailPhoneAlertMessage',
          title: '',
          alertType: 'info',
          doesNotRequireAnswer: true,
          message:
            'Ef netfang og símanúmer er ekki rétt hér að ofan þá verður að breyta þeim upplýsingum á mínum síðum Ísland.is og opna nýja umsókn.',
          links: [
            {
              title: 'Fara á mínar síður',
              url: 'https://www.island.is/mínar-síður',
              isExternal: false,
            },
          ],
        }),
      ],
    }),
  ],
})

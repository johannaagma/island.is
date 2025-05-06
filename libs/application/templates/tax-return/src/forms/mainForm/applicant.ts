import {
  buildAlertMessageField,
  buildLinkField,
  buildMultiField,
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
          title: 'Full nafn',
          backgroundColor: 'white',
          width: 'full',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            const { externalData } = application

            return 'TODO'
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
            return '123456-7890'
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
            return 'TODO'
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
            return 'TODO'
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
            return 'TODO'
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
            return 'TODO'
          },
        }),
        buildTextField({
          id: 'applicantInformation.phoneNumber',
          title: 'Símanúmer',
          backgroundColor: 'white',
          width: 'half',
          readOnly: true,
          size: 'sm',
          defaultValue: (application: Application) => {
            return 'TODO'
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

import {
  buildDataProviderItem,
  buildExternalDataProvider,
  buildForm,
  buildSection,
  buildSubmitField,
  coreMessages,
} from '@island.is/application/core'
import { DefaultEvents } from '@island.is/application/types'
import { FormModes } from '@island.is/application/types'
import { GetFinancialOveriew } from '../../dataProviders'

export const Prerequisites = buildForm({
  id: 'PrerequisitesDraft',
  mode: FormModes.NOT_STARTED,
  renderLastScreenButton: true,
  children: [
    buildSection({
      id: 'conditions',
      tabTitle: 'Forkröfur',
      children: [
        buildExternalDataProvider({
          id: 'approveExternalData',
          title: 'External data',
          dataProviders: [
            buildDataProviderItem({
              provider: GetFinancialOveriew,
              title: 'Upplýsingar úr Þjóðskrá',
              subTitle: 'Upplýsingar um þig, maka og börn.',
            }),
          ],
          submitField: buildSubmitField({
            id: 'submit',
            placement: 'footer',
            refetchApplicationAfterSubmit: true,
            actions: [
              {
                event: DefaultEvents.SUBMIT,
                name: coreMessages.buttonNext,
                type: 'primary',
              },
            ],
          }),
        }),
      ],
    }),
  ],
})

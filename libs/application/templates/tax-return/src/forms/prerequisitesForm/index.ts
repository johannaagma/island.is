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

import {
  GetFinancialOveriew,
  GetIndividual,
  ValidateCanCreate,
} from '../../dataProviders'

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
          title: 'Gagnaöflun',
          checkboxLabel: 'Ég hef kynnt mér ofangreint varðandi gagnaöflun',
          dataProviders: [
            buildDataProviderItem({
              provider: GetIndividual,
              title: 'Upplýsingar úr Þjóðskrá',
              subTitle: 'Allar upplýsingar um þig koma frá Þjóðskrá..',
            }),
            buildDataProviderItem({
              title: 'Netfang og símanúmer úr þínum stillingum',
              subTitle:
                'Til þess að auðvelda umsóknarferlið er gott að hafa fyllt út netfang og símanúmer á mínum síðum',
            }),
            buildDataProviderItem({
              provider: GetFinancialOveriew,
              title: 'Upplýsingar frá Skattinum',
              subTitle:
                'Skatturinn sækir gögn varðandi tekjur, eignir og fleira',
            }),
            buildDataProviderItem({
              provider: ValidateCanCreate,
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

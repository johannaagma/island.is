import { buildForm } from '@island.is/application/core'
import { buildFormConclusionSection } from '@island.is/application/ui-forms'
import { FormModes } from '@island.is/application/types'

export const completedForm = buildForm({
  id: 'completedForm',
  mode: FormModes.COMPLETED,
  children: [
    buildFormConclusionSection({
      alertTitle: 'Skattframtal sent inn til Skattsins!',
      alertMessage: '',
      expandableDescription:
        'Skatturinn hefur móttekið skattframtalið þitt og gert sína útreikninga. Þú getur nálgast skattskýrsluna þína hér að neðan en  hún er einnig geymd inni á mínum síðum ísland.is þar sem þú getur nálgast allar þínar skattskýrslur.',
    }),
  ],
})

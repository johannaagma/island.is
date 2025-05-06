import { buildForm } from '@island.is/application/core'
import { FormModes } from '@island.is/application/types'
import { applicantSection } from './applicant'
import { incomeSection } from './income'
import { overviewSection } from './overview'
import { generalInfoSection } from './generalInfo'
import { otherAssetsSection } from './otherAssets'
import { capitalInfoSection } from './capitalIncome'
import { debtSection } from './debt'

export const MainForm = buildForm({
  id: 'MainForm',
  mode: FormModes.DRAFT,
  renderLastScreenButton: true,
  children: [
    applicantSection,
    generalInfoSection,
    incomeSection,
    capitalInfoSection,
    otherAssetsSection,
    debtSection,
    overviewSection,
  ],
})

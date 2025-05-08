import { buildForm } from '@island.is/application/core'
import { FormModes } from '@island.is/application/types'
import { applicantSection } from './applicant'
import { incomeSection } from './income'
import { overviewSection } from './overview'
import { generalInfoSection } from './generalInfo'
import { otherAssetsSection } from './otherAssets'
import { capitalInfoSection } from './capitalIncome'
import { debtSection } from './debt'
import { childSection } from './child'
import { supportingDocumentsSection } from './supportingDocuments'

export const MainForm = buildForm({
  id: 'MainForm',
  mode: FormModes.DRAFT,
  renderLastScreenButton: true,
  renderLastScreenBackButton: true,
  children: [
    applicantSection,
    generalInfoSection,
    incomeSection,
    capitalInfoSection,
    otherAssetsSection,
    debtSection,
    childSection,
    supportingDocumentsSection,
    overviewSection,
  ],
})

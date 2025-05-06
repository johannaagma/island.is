import { defineTemplateApi } from '@island.is/application/types'
import { ApiActions } from '../shared/types'

export const GetApplicantApi = defineTemplateApi({
  action: ApiActions.getApplicant,
  externalDataId: 'applicantInformation',
})

import { defineTemplateApi } from '@island.is/application/types'
import { ApiActions } from '../shared/types'

export const GetFinancialOveriew = defineTemplateApi({
  action: ApiActions.getFinancialOverview,
  externalDataId: 'getFinancialOverview',
})

export const ValidateCanCreate = defineTemplateApi({
  action: ApiActions.validateCanCreate,
})

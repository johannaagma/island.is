import { createEnhancedFetch } from '@island.is/clients/middlewares'
import { ConfigType, XRoadConfig } from '@island.is/nest/config'
import {
  Configuration,
  FinancialOverviewApi,
  MetadataApi,
  TaxReturnApi,
} from '../../gen/fetch'
import { TaxReturnClientConfig } from './taxReturnClient.config'

const configFactory = (basePath: string) => ({
  fetchApi: createEnhancedFetch({
    name: 'clients-tax-return',
    organizationSlug: 'skatturinn',
  }),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  basePath,
})

export const exportedApis = [
  TaxReturnApi,
  FinancialOverviewApi,
  MetadataApi,
].map((Api) => ({
  provide: Api,
  useFactory: (config: ConfigType<typeof TaxReturnClientConfig>) => {
    return new Api(new Configuration(configFactory(config.basePath)))
  },
  inject: [XRoadConfig.KEY, TaxReturnClientConfig.KEY],
}))

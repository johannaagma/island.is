import { createEnhancedFetch } from '@island.is/clients/middlewares'
import { ConfigType, XRoadConfig } from '@island.is/nest/config'
import { Configuration, IndividualApi } from '../../gen/fetch'
import { NationalRegistryBackendApiClientConfig } from './nationalRegistryBackendApiClient.config'

const configFactory = (basePath: string) => ({
  fetchApi: createEnhancedFetch({
    name: 'clients-national-registry-backend-api',
    organizationSlug: 'thjodskra',
  }),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  basePath,
})

export const exportedApis = [IndividualApi].map((Api) => ({
  provide: Api,
  useFactory: (
    config: ConfigType<typeof NationalRegistryBackendApiClientConfig>,
  ) => {
    return new Api(new Configuration(configFactory(config.basePath)))
  },
  inject: [XRoadConfig.KEY, NationalRegistryBackendApiClientConfig.KEY],
}))

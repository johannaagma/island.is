import { bootstrap } from '@island.is/infra-nest-server'

import { AppModule } from './app/app.module'
import { openApi } from './openApi'

export const bootstrapServer = () =>
  bootstrap({
    appModule: AppModule,
    name: 'services-national-registry-backend',
    port: 3400,
    swaggerPath: '/api/swagger',
    openApi,
    enableVersioning: true,
  })

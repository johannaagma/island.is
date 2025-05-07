import { Module } from '@nestjs/common'

import { SharedTemplateAPIModule } from '../../shared'

import { TaxReturnService } from './tax-return.service'
import { ApplicationsNotificationsModule } from '../../../notification/notifications.module'
import { TaxReturnClientModule } from '@island.is/clients/tax-return'
import { NationalRegistryBackendApiClientModule } from '@island.is/clients/national-registry-backend-api'

@Module({
  imports: [
    SharedTemplateAPIModule,
    ApplicationsNotificationsModule,
    TaxReturnClientModule,
    NationalRegistryBackendApiClientModule,
  ],
  providers: [TaxReturnService],
  exports: [TaxReturnService],
})
export class TaxReturnModule {}

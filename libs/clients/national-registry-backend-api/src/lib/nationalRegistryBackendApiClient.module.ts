import { Module } from '@nestjs/common'
import { NationalRegistryBackendApiClient } from './nationalRegistryBackendApiClient.service'
import { exportedApis } from './apiConfiguration'

@Module({
  providers: [...exportedApis, NationalRegistryBackendApiClient],
  exports: [NationalRegistryBackendApiClient],
})
export class NationalRegistryBackendApiClientModule {}

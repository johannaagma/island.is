import { Module } from '@nestjs/common'
import { TaxReturnClient } from './taxReturnClient.service'
import { exportedApis } from './apiConfiguration'

@Module({
  providers: [...exportedApis, TaxReturnClient],
  exports: [TaxReturnClient],
})
export class TaxReturnClientModule {}

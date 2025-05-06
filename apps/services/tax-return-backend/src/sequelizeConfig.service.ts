import { Inject, Injectable } from '@nestjs/common'
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize'
import type { Logger } from '@island.is/logging'
import { LOGGER_PROVIDER } from '@island.is/logging'
import { getOptions } from '@island.is/nest/sequelize'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as dbConfig from '../sequelize.config.js'

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(
    @Inject(LOGGER_PROVIDER)
    private logger: Logger,
  ) {}

  createSequelizeOptions(): SequelizeModuleOptions {
    const env = process.env.NODE_ENV || 'development'
    // eslint-disable-next-line @typescript-eslint/ban-types
    const config = (dbConfig as { [key: string]: object })[env]
    return {
      ...config,
      ...getOptions({ logger: this.logger }),
      logging: false,
    }
  }
}

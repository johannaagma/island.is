import { DocumentBuilder } from '@nestjs/swagger'
import { default as environment } from './environments/environment'

export const openApi = new DocumentBuilder()
  .setTitle('Tax Return Backend')
  .setDescription(
    '"API for managing tax returns. Supports creating, updating, retrieving, and deleting tax returns. Also provides access to field definitions used in the tax return application.',
  )
  .setExternalDoc('swagger.json', '/api/swagger-json')
  .addServer(process.env.PUBLIC_URL ?? `http://localhost:${environment.port}`)
  .addOAuth2(
    {
      type: 'oauth2',
      description:
        'Authentication and authorization using island.is authentication service (IAS).',
      flows: {
        authorizationCode: {
          authorizationUrl: `${environment.auth.issuer}/connect/authorize`,
          tokenUrl: `${environment.auth.issuer}/connect/token`,
          scopes: {
            ['openid']: '',
            ['profile']: '',
          },
        },
      },
    },
    'ias',
  )
  .setVersion('1.0')
  .addTag('Tax Return Backend API')
  .build()

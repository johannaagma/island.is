import { DocumentBuilder } from '@nestjs/swagger'
import { default as environment } from './environments/environment'

export const openApi = new DocumentBuilder()
  .setTitle('National Registry Backend')
  .setDescription(
    'API for fetching information about individual from the National Registry.',
  )
  .setExternalDoc('swagger.json', '/api/swagger-json')
  .addServer(process.env.PUBLIC_URL ?? `http://localhost:${environment.port}`)
  .setVersion('1.0')
  .addTag('National Registry Backend API')
  .build()

import { defineConfig } from '@island.is/nest/config'
import * as z from 'zod'

const schema = z.object({
  basePath: z.string(),
})

export const NationalRegistryBackendApiClientConfig = defineConfig<
  z.infer<typeof schema>
>({
  name: 'NationalRegistryBackendApiClient',
  schema,
  load() {
    return {
      basePath: 'http://localhost:3400',
    }
  },
})

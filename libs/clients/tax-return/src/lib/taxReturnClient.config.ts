import { defineConfig } from '@island.is/nest/config'
import * as z from 'zod'

const schema = z.object({
  basePath: z.string(),
})

export const TaxReturnClientConfig = defineConfig<z.infer<typeof schema>>({
  name: 'TaxReturnClient',
  schema,
  load() {
    return {
      basePath: 'http://localhost:3390',
    }
  },
})

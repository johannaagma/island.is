const devConfig = {
  production: false,
  port: 3390,
  auth: {
    audience: '@island.is',
    issuer: 'https://identity-server.dev01.devland.is',
  },
  events: {
    url: process.env.EVENT_URL,
    errorUrl: process.env.ERROR_EVENT_URL,
  },
  audit: {
    defaultNamespace: '@island.is/tax-return-backend',
  },
}

export default devConfig

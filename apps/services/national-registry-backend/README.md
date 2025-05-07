# National Registry Backend API

## About

This service manages national registry backend

## Quickstart

Ensure docker is running, then run the following when running for the first time:

Simply run these two commands:

```
yarn dev-init services-national-registry-backend
yarn dev services-national-registry-backend
```

### API service and backend

## Initial setup

```bash
yarn dev-services services-national-registry-backend
```

To run the migrations and seed scripts:

```bash
yarn nx run services-national-registry-backend:migrate
yarn nx run services-national-registry-backend:seed
```

## Start the API service

```bash
yarn start services-national-registry-backend
```

Open url:
localhost:3400/api/swagger
localhost:3400/api/graphql (for GraphQl playground)

## Regenerate the OpenAPI file

```bash
yarn nx run services-national-registry-backend:codegen/backend-schema
```

## Regenerate the GraphQl file

```bash
yarn nx run services-national-registry-backend:codegen/backend-schema-graphql
```

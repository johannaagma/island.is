# Tax Return Backend API

## About

This service manages tax return backend

## Quickstart

Ensure docker is running, then run the following when running for the first time:

Simply run these two commands:

```
yarn dev-init services-tax-return-backend
yarn dev services-tax-return-backend
```

### API service and backend

## Initial setup

```bash
yarn dev-services services-tax-return-backend
```

To run the migrations and seed scripts:

```bash
yarn nx run services-tax-return-backend:migrate
yarn nx run services-tax-return-backend:seed
```

## Start the API service

```bash
yarn start services-tax-return-backend
```

Open url:
localhost:3390/api/swagger

## Regenerate the OpenAPI file

```bash
yarn nx run services-tax-return-backend:codegen/backend-schema
```

# NestJS Bookmarks REST API

Build a bookmarks REST API from scratch using Nest.js, Docker, PostgreSQL, Passport.js, Prisma, PactumJS and Dotenv.

## Installation

```bash
# run postgres database
$ docker-compose up -d

# install app dependencies
$ yarn install

# generate prisma models in database
$ yarn prisma generate
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Resources

- [NestJS - A progressive Node.js framework](https://nestjs.com/)

## Reference

- [Representational state transfer - Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer)

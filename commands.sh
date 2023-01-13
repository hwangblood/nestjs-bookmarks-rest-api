# run postgres database
$ docker-compose up -d 

# install app  dependencies
$ yarn install

# create database migrations file ,also run `yarn prisma generate`
$ yarn prisma migrate dev

# generate prisma models in postgres
$ yarn prisma generate

# run app in dev
$ yarn run start:dev

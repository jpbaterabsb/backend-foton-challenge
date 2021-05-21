# Fullstack Challenge - Backend

## Introduction

This project was developed in AdonisJs. I choosed it, because is a powerful framework, it facilitates CRUD development and it has Lucid ORM that make easy build SQL queries.

## Requirements
  
For running that application you must install following tools:

- [Node](https://nodejs.org/pt-br/download/)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) - Optional
- [Docker-Compose](https://docs.docker.com/compose/install/)


### Configure Project

1. Clone this repository.
2. In backend directory of this repository, run following commands:
```
npm install

cp .env.example .env

docker-compose up -d

node ace migration:run --force

node ace db:seed
``` 

Note: When you execute docker-compose you start postegresSQL's docker, so you need to run the command <b>docker-compose down</b> to stop postegresSQL's docker.


### Run application

Execute the following command:

```
node ace serve
```

### Notes

- This project is deployed in Heroku, this is the [url](https://backend-book-foton.herokuapp.com/books)
- This project don't have unit or integration tests, I didn't have time enough to develop it.

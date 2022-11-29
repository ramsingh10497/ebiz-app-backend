
# Expense Tracker

An app for tracking all of your expenses


## Tech Stack

**Server:** Node, Express, Knex

**Database:** PostgreSQL


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`Database`

`user`

`password`


## Run Locally

Clone the project

```bash
  git clone git@github.com:ramsingh10497/ebiz-app-backend.git
```

Go to the project directory

```bash
  cd ebiz-app-backend
```

Install dependencies

```bash
  npm install or yarn
```

create schema in database

```bash
  npm run migrate or yarn migrate
```

Start the server

```bash
  npm run develop or yarn develop
```


## API Reference

#### Get all Expenses

```http
  GET /product/getAll
```

#### Add your new expense

```http
  GET /product/create
```


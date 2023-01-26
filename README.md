# fsjnd-project-two
Build A Storefront Backend

The following rest api simulate the backend of a e-commerce website based on 4 models categories, users, orders, products. A list of the enpoints is available in the REQUIREMENTS.md file

## Environement set up
- Connect to the postgres database using psql -U postgres and provide your username and password.
- create a database owned by postgres.using the command CREATE DATABASE store_db WITH ENCODING 'UTF8';
### Database 

In the root of the project add a .env file and provide values for the following variables:

POSTGRES_HOST="127.0.0.1"
POSTGRES_DB="project_db"
POSTGRES_DB="project_db_test"
POSTGRES_USER="your pg username"
POSTGRES_PASSWORD="your pg password"
ENV=dev
BCRYPT_PASSWORD=add-your-bcrypt-password 
SALT_ROUND=10
TOKEN=add-a-token-of-your-choice

- Run the script migrations to create all the table neccessary for the app  `npm run up` you can delete them using `npm run down`

## Getting Started

* After cloning this project run `npm install` to get all the dependancies
* Set up your database by running   `npm run up` you can get acces to the database by signin in with your credential in the command line
* Build the app by running `npm run build`

## Test Script

* Add a database.json file in the root of your  project and provide values following this pattern for different environment

{
    "dev":{
        "driver":"pg",
        "host":"127.0.0.1",
        "database":"project_db",
        "user":"your-pg-username",
        "password":"your-pg-password"
    },
    "test":{
        "driver":"pg",
        "host":"127.0.0.1",
        "database":"project_db_test",
        "user":"your-pg-username",
        "password":"your-pg-username"
    }
}

### Dev Scripts

* Build the project by running `npm run build`

* `npm run jasmine` command will  run all the test This will build the project before performing the tests.

* Launch the project on port 3000 by running `npm run start` all the endpoint are documented in the requirements.txt file. to acces products route for example `http://localhost:3000/api/products` will get all the available product for you


## Credits and specials thanks

- https://gitter.im/db-migrate/node-db-migrate?at=5d038662a8d9871b32866e4c
- https://github.com/skb1129/storefront-backend/tree/main/src/models
- https://github.com/obynonwane/api_udacity/blob/main/src/models/user.ts
- https://stackoverflow.com/questions/69395841/express-is-not-reading-the-request-body
- https://blog.logrocket.com/getting-started-with-postgres-in-your-react-app/
- https://www.postgresqltutorial.com/
- https://www.npmjs.com/package/bcrypt
- https://www.npmjs.com/package/bcrypt
- https://www.makeuseof.com/nodejs-bcrypt-hash-verify-salt-password/
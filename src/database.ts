import dotenv from "dotenv";
import pg, { Pool } from "pg";

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV
} = process.env;

console.log(ENV);

let client ;

if(ENV ==='dev'){
    client =  new Pool({
        host:POSTGRES_HOST,
        database:POSTGRES_DB,
        user:POSTGRES_USER,
        password:POSTGRES_PASSWORD
    })
}

if(ENV ==='test'){
    client =  new Pool({
        host:POSTGRES_HOST,
        database:POSTGRES_DB_TEST,
        user:POSTGRES_USER,
        password:POSTGRES_PASSWORD
    })
}

export default  client
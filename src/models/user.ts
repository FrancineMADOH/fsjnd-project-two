//@ts-ignore
import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { userauthToken
 } from "../middlewares/authmiddleware";
import jwt, { Secret} from "jsonwebtoken"

dotenv.config()

export type User = {
    id?:number
    firstName : string;
    lastName :string ;
    password :string ;
    username:string;
}

const {
  BCRYPT_PASSWORD, 
  SALT_ROUND,
} = process.env

export class userStore  {
//index
async index(): Promise<User[]>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM users";
        const result = await conn.query(sql_command)
        conn.release()

        return result.rows;
    }catch(err){
        throw new Error(`Failed to load users. ${err}`)
    }
}

//show
async show(id:number):Promise<User>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM users WHERE id = ($1)";
        //@ts-ignore
        const result = await conn.query(sql_command,[id])
        conn.release()

        return result.rows
    }catch(err){
        throw new Error(`Failed to fetch user with id ${id}. ${err}`)
    }
}

//create
async create(data:User): Promise<User>{
    const { firstName,lastName,password,username } = data;
    try{
        const hashed_pw =  bcrypt.hashSync(password + BCRYPT_PASSWORD, parseInt(SALT_ROUND as string))
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "INSERT INTO users(firstName,lastName,password,username) VALUES($1,$2,$3,$4)";
        const result = await conn.query(sql_command, [firstName,lastName,hashed_pw,username])
        const data = result.rows[0]
        conn.release()

        return data;
    }catch(err){
        throw new Error(`Failed to insert new users. ${err}`)
    }
}

async signin(username:string,password:string):Promise<User|null>{
    try{
      //@ts-ignore
      const conn = await client.connect()
      const sql_command = " SELECT * FROM users WHERE username = ($1)";
      const result = await conn.query(sql_command,[username])
      if(result.rows.length) {

      const user = result.rows[0]
      if (bcrypt.compareSync(password + BCRYPT_PASSWORD, user.password)) {
          return user
        }
      }
      conn.release()
  
      return null;
    }catch(err){
        throw new Error(`Failed to signin ${err}`)
    }
}

async update(username:string, id:number):Promise<User>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "UPDATE users SET username=($1)  WHERE id = ($2)";
        //@ts-ignore
        const result = await conn.query(sql_command,[username, id])
        conn.release()

        return result.rows[0]
    }catch(err){
        throw new Error(`Failed to fetch user with id ${id}. ${err}`)
    }
}

}







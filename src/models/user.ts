//@ts-ignore
import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"

dotenv.config()

export type User = {
   // id : number ;
    firstName : string;
    lastName :string ;
    password :string ;
    username:string;
}

const {
  BCRYPT_PASSWORD, 
  SALT_ROUND,
  SECRET_TOKEN
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
  
      return null

    }catch(err){
        throw new Error(`Failed to signin ${err}`)
    }
}

}



//       connectionObject.release();

//       return user;
//     } catch (error) {}
//   }

//   async signin(details: SigninType) {
//     try {
//       console.log(process.env.TOKEN_SECRET);
//       // return details;
//       const { email, password } = details;

//       const sql = "SELECT * FROM users WHERE email=($1)";
//       // @ts-ignore
//       const conn = await client.connect();

//       const result = await conn.query(sql, [email]);

//       conn.release();

//       const secret: any = process.env.TOKEN_SECRET;
//       const token = jwt.sign({ user: result }, secret);
//       const user = result.rows[0].email;
//       return {
//         user: user,
//         token: token,
//       };
//     } catch (error) {}
//   }
// }



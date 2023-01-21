//@ts-ignore
import client from "../database";

export type User = {
    id : number ;
    firstName : string;
    lastName :string ;
    password :string ;
}

export class userStore  {
//index
async index(): Promise<User[]>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM users";
        const result = conn.query(sql_command)
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
        const conn = client.connect()
        const sql_command = "SELECT * FROM users WHERE id == ($1)";
        //@ts-ignore
        const result = conn.query(sql_command,[id])
        conn.release()

        return result.rows[0]
    }catch(err){
        throw new Error(`Failed to fetch user with id ${id}. ${err}`)
    }
}

//create
async create(data:User): Promise<User>{
    const { firstName,lastName,password } = data;
    try{
        //@ts-ignore
        const conn = client.connect()
        const sql_command = "INSERT INTO users(firstName,lastName,password) VALUES($1,$2,$3) return *";
        const result = conn.query(sql_command, [firstName,lastName,password])
        const data = result.rows[0]

        return data;
    }catch(err){
        throw new Error(`Failed to insert new users. ${err}`)
    }
}

}





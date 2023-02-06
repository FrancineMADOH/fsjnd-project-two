//@ts-ignore
import client from "../database";

export type Category = {
    id?:number,
    category:string;
}

export class categoryStore {
//create 
async create(c:Category): Promise<Category>{
    //const { category } = data;
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "INSERT INTO categories(category) VALUES($1) RETURNING *;";
        const result = await conn.query(sql_command,[c.category])
        const data = result.rows[0];
        conn.release()
        return data;
    }catch(err){
        throw new Error(`Failed to insert new category. ${err}`)
    }
}

//index
async index(): Promise<Category[]>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM categories; ";
        const result = await conn.query(sql_command)
        conn.release()

        return result.rows;
    }catch(err){
        throw new Error(`Failed to load product categories. ${err}`)
    }
}

}


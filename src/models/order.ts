
//@ts-ignore
import client from "../database";

export type Order  = {

    id:number ; 
    productID : number;
    quantity: number; 
    userID : number;
    status:boolean ; 
}
export class orderStore {

//current order by user
async show(user:number):Promise<Order>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM users INNER JOIN orders ON users.id = orders.userID WHERE users.id = ($1)";
        //@ts-ignore
        const result = await conn.query(sql_command,[user])
        conn.release()

        return result.rows
    }catch(err){
        throw new Error(`Failed to fetch order for user ${user}. ${err}`)
    }
}


//completed orders by customer 
async completed(user:number, status:boolean):Promise<Order[]>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM orders INNER JOIN users ON users.id = orders.userID WHERE users.id = ($1) AND orders.status = ($2) ";
        //@ts-ignore
        const result = await conn.query(sql_command,[user,status])
        conn.release()

        return result.rows[0]
    } catch(err){
        throw new Error(`Failed to fetch orders with status ${status}. ${err}`)
    }
}

}

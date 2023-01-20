
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
async show(user:number):Promise<Order[]>{
    try{
        //@ts-ignore
        const conn = client.connect()
        const sql_command = "SELECT * FROM orders WHERE id == ($1)";
        //@ts-ignore
        const result = client.query(sql_command,[user])
        conn.release()

        return result.rows[0]
    }catch(err){
        throw new Error(`Failed to fetch order for user ${user}. ${err}`)
    }
}


//completed user by customer 
async completed(user:number, status:boolean):Promise<Order[]>{
    try{
        //@ts-ignore
        const conn = client.connect()
        const sql_command = "SELECT * FROM orders WHERE id == ($1) AND status == ($2) ";
        //@ts-ignore
        const result = client.query(sql_command,[user,status])
        conn.release()

        return result.rows[0]
    }catch(err){
        throw new Error(`Failed to fetch orders with status${status}. ${err}`)
    }
}

}


//@ts-ignore
import client from "../database";

export type Order  = {
    id?:number ; 
    productID : number;
    quantity: number; 
    userID : number;
    status:number ; 
}
export class orderStore {

//current order by user
async show(user:number):Promise<Order>{
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM orders INNER JOIN users ON users.id = orders.userID WHERE users.id = ($1);";
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
        const sql_command = "SELECT * FROM orders INNER JOIN users ON users.id = orders.userID WHERE users.id = ($1) AND orders.status = ($2) ;";
        //@ts-ignore
        const result = await conn.query(sql_command,[user,status])
        conn.release()

        return result.rows
    } catch(err){
        throw new Error(`Failed to fetch orders with status ${status}. ${err}`)
    }
}

//create orders
async create(data:Order): Promise<Order>{
    const {   
    productID ,
    quantity ,
    userID ,
    status 
    } = data;
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "INSERT INTO orders VALUES($1,$2,$3,$4) RETURNING *;";
        const result = await conn.query(sql_command, [productID,quantity,userID,status])
        const data = result.rows[0];
        conn.release()
        return data;
    }catch(err){
        throw new Error(`Failed to create new order. ${err}`)
    }
}

//updates
async update(user:number,quantity:number): Promise<Order>{
    
    try{
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "UPDATE orders SET quantity=($1) WHERE userID=($2) RETURNING quantity; ";
        const result = await conn.query(sql_command, [quantity,user])
        const data = result.rows[0];
        conn.release()

        return data;
    }catch(err){

        throw new Error(`Failed update orders. ${err}`)
    }
}

}

//@ts-ignore
import client from "../database";

export type Product = {
    id: number  ;
    productName: string;
    price: number ;
    category: number; 
}

export class productStore {

//index
async index(): Promise<Product[]>{
    try {
        //@ts-ignore
        const conn = await client.connect();
        const sql_command = "SELECT * FROM products "
        const result = await conn.query(sql_command);
        conn.release()

        return result.rows;

    }catch(err){
        throw new Error(`cannot get ${err}`);
    }
}

//show
async show(id:number): Promise<Product>{
    try {
        
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM products WHERE id==($1)";
        const result = await conn.query(sql_command, [id])
        conn.release()

        return result.rows[0];
        
    }catch(err){
        throw new Error(`Cannot get product with id ${id} ${err}`)
    }
}

//create
async create(data:Product): Promise<Product>{
    const {
        productName,
        price,
        category
    } = data;
    try {
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "INSERT INTO products(productName, price,category) VALUES($1,$2,$3) return *";
        const result = await conn.query(sql_command, [productName,price,category])
        conn.release()
        const data = result.rows[0];
        return data
        
    }catch(err){
        throw new Error (`Failed to create product: ${err}`)
    }
}

//top 5 most popular product select count get the greater
async topfive(): Promise<Product[]>{
    try {
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM products LIMIT 5";
        const result = await conn.query(sql_command)
        conn.release()
        return result.rows;
        
    }catch(err){
        throw new Error(`Failed to fetch top 5 product ${err}`)
    }
}

//products by category
async category(name:string): Promise<Product[]>{
    try {
        //@ts-ignore
        const conn = await client.connect()
        const sql_command = "SELECT * FROM products WHERE productName == ($1)";
        const result = await conn.query(sql_command,[name])
        conn.release()
        return result.rows;
        
    }catch(err){
        throw new Error(`No product with category named ${name}: ${err}`)
    }
}

}


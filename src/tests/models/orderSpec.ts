import { orderStore } from "../../models/order";
import { userStore } from "../../models/user";
import { orders, users, completedOrders } from "./testsData";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import _ from 'lodash';
//@ts-ignore
import client from "../../database";
dotenv.config();
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;


const store = new orderStore()
const storeUser = new userStore()

describe("Order store model class", ()=>{

    it("Should have an index method", ()=>{
        expect(store.completed).toBeDefined();
    });

    it("Should have a show method", ()=>{
        expect(store.show).toBeDefined();
    });

    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    });

    it("Should have a update method", ()=>{
        expect(store.update).toBeDefined();
    }); 
    
 });

describe('Order model methods test suite', ()=>{

beforeAll( async ()=>{
//@ts-ignore
const conn = await client.connect();
const sql_command1 =
        'INSERT INTO users(firstName,lastName,password,username) VALUES($1,$2,$3,$4);';
      for (const user of users) {
        const hashedPassword = bcrypt.hashSync(
          user.password + BCRYPT_PASSWORD,
          parseInt(SALT_ROUNDS as unknown as string)
        );
        await conn.query(sql_command1, [
            user.firstname,
            user.lastname, 
            hashedPassword,
            user.username   
        ]);
      } 

const sql_command = 'INSERT INTO orders(productID,quantity,userID,status) VALUES($1,$2,$3,$4);';

for (const order of orders) {
  
 const testdata =  await conn.query(sql_command, [
    order.productID,
    order.quantity,
    order.userID,
    order.status,
  ]);
} 
conn.release();

});

it('Show method return orders by the specified user id', async()=>{
    const result =  await store.show(1)    
    expect(result).toBeDefined()
    expect(result).not.toBeNull()
});

it('Completed method return a list of completed orders', async()=>{
    const result =  await store.completed(1,true)
    expect(result[0].status).toBeTrue()
    
    
});

it('Create method should add a new  order to the db', async()=>{
    const result =  await store.create({
        productID:3,
        quantity:2,
        userID:1,
        status:1,
         
    });
    expect(result).toBeDefined()
    expect(result).not.toBeNull()
    expect(result.id).toBe(3)
});


it('Update method method should update a specific order', async()=>{
    const result =  await store.update(1,5)
    expect(result.quantity).toEqual(5)
    
});

afterAll(async()=>{
    //@ts-ignore
    const conn = await client.connect();
    await conn.query('DELETE FROM orders;')
    await conn.query('ALTER SEQUENCE orders_id_seq RESTART WITH 1; ')
    conn.release();

});
       
});

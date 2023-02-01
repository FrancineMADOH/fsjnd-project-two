import { orderStore } from "../../models/order";
import { userStore } from "../../models/user";
import { orders, users, completedOrders } from "./testsData";
//@ts-ignore
import client from "../../database";

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

beforeAll(async ()=>{
//@ts-ignore
const conn = await client.connect();
const sql_command = 'INSERT INTO orders(productID,quantity,userID,status) VALUES($1,$2,$3,$4);';

for (const order of orders) {
  
  await conn.query(sql_command, [
    order.quantity,
    order.userID,
    order.status,
    order.productID,
  ]);

} 
conn.release();

});

it('Show method return a specified of order by its id', async()=>{
    const result =  await store.show(1)

    expect(result).toEqual({
        id:1,
        productID: 1,
        quantity: 2,
        userID: 1,
        status: true
    })
});

it('Completed method return a list of completed orders', async()=>{
    const result =  await store.completed(1,true)

    expect(result).toEqual(completedOrders)
});

it('Create method should add a new  order to the db', async()=>{
    const result =  await store.create({
        id:3,
        productID:2,
        quantity:2,
        userID:1,
        status:true,
         
    })
});
it('Update method method should update a specific order', async()=>{
    const result =  await store.update(1,5)

    expect(result).toEqual({
        id:1,
        productID: 1,
        quantity: 5,
        userID: 1,
        status: true
    })
});

afterAll(async()=>{
    //@ts-ignore
    const conn = await client.connect();
    await conn.query('DELETE FROM orders;')
    await conn.query('ALTER SEQUENCE orders_id_seq RESTART WITH 1; ')
    conn.release();

});
       
});

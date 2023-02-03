import { productStore } from "../../models/product";
import { products, indexedProducts, catProducts } from "./testsData";
//@ts-ignore
import client from "../../database";

const store = new productStore()

describe("Product store model definition test suite", ()=>{
    
    it("Index method should be defined", ()=>{
        expect(store.index).toBeDefined();
    })
    it("Index method should be defined", ()=>{
        expect(store.create).toBeDefined();
    })
    it("Index method should be defined", ()=>{
        expect(store.show).toBeDefined();
    })
    it("Category method should be defined", ()=>{
        expect(store.category).toBeDefined();
    })
    it("Delete method should be defined", ()=>{
        expect(store.delete).toBeDefined();
    })
    
});

describe('Product model method  test suite', () => {
    beforeAll(async () => {

      //@ts-ignore
      const conn = await client.connect();
      const sql_command =
        'INSERT INTO products(productName, price,category) VALUES($1,$2,$3);';
  
      for (const product of products) {
        
        await conn.query(sql_command, [
           product.productname,
           product.price,
           product.category
        ]);

      } 
      conn.release();
    });

    
    // it('Create method should add a new product to the db',  async()=>{
    //     const result = await store.create({
    //         productname:'Tomate Neima',
    //         price:200,
    //         category:1
    //     });
    //     console.log(result)

    //     expect(result).toEqual({
    //         productname:'Tomate Neima',
    //         price:200,
    //         category:1

    //     })
    // });

    it('Index method return a list of product', async()=>{
        const result = await store.index();
        expect(result).toEqual(indexedProducts)
    });

    it('Show method return the product with the specified id', async ()=>{
        const result = await store.show(2);
        expect(result).toEqual({
            id:2,
            productname:'Neima',
            price:100,
            category:1
        })
    });
    
    it('Category method should return  a product of the selected category', async ()=>{
        const result = await store.category(1)

        expect(result).toEqual(catProducts)
    });

    // it('Delete method should remode the specified product from the db', async()=>{
    //     const removedProduct = await store.delete(2);
    //     expect(removedProduct).toEqual({
    //         id:2,
    //         productname:'Neima',
    //         price:100,
    //         category:2

    //     });
    // });

    afterAll(async()=>{
        //@ts-ignore
        const conn = await client.connect();
        await conn.query('DELETE FROM products;')
        await conn.query('ALTER SEQUENCE products_id_seq RESTART WITH 1; ')
        conn.release();
    })

});
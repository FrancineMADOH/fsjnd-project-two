import supertest from "supertest";
import app from "../../server";
const request = supertest(app);
import { Product } from "../../models/product";
import { products, testToken } from "../models/testsData";


describe("Test suite for the Product enpoint ", ():void=>{

    const product:Product = {
        id:1,
        productname:"Oignons",
        price:300,
        category:1
    } 

    it("Require auth to create a new product ", async():Promise<void>=>{
        const res = await request.post(
            "/api/products"
          );
          expect(res.status).toBe(401);    
    })

    it("It should post a new product ", async():Promise<void>=>{
        const res = await request.post("/api/products")
        .set('Authorization', `Bearer ${testToken}`).send(product);
          expect(res.status).toBe(200);    
    })




    it("Get the product api index routes", async():Promise<void>=>{
        const res = await request.get(
            "/api/products"
          );
          expect(res.status).toBe(200);
        
    })

    it("Get the product by its category", async():Promise<void>=>{
        const res = await request.get(
            "/api/products/1"
          );
          expect(res.status).toBe(200);
        
    });

    it("Get the product by its id", async():Promise<void>=>{
        const res = await request.get(
            "/api/products/1"
          );
          expect(res.status).toBe(200);
        
    });

    it("Delete a product with auth provided", async():Promise<void>=>{
        const res = await request.delete(
            "/api/products/1"
          );
          expect(res.status).toBe(401);
        
    });

});
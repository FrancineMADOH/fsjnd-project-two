import supertest from "supertest";
import app from "../../server";
import { Order } from "../../models/order";
import { testToken } from "../models/testsData";
const request = supertest(app)


describe("Test suite for the Order enpoint ", ()=>{
    const order: Order = {
        id:1,
        productID:1,
        userID:1,
        quantity:10,
        status:1
    }

    it("Create  new order via index routes", async():Promise<void>=>{
        const res = await request.post(
            "/api/orders" ).set('Authorization', `Bearer ${testToken}`).send(order)
          expect(res.status).toBe(201);
    });

    it("Require auth to get the specified order", async():Promise<void>=>{
        const res = await request.get(
            "/api/orders/:id"
          );
          expect(res.status).toBe(401);
        
    });

    it("Get the completed order of the user", async():Promise<void>=>{
        const res = await request.get(
            "/api/orders/1/1"
          );
          expect(res.status).toBe(401);
        
    });

});

    

   
    
        
   

    

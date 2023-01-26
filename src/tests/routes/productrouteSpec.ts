import supertest from "supertest"
import app from "../../server"
const request = supertest(app)


describe("Test suite for the Product enpoint ", ():void=>{

    it("Get the product api index routes", async():Promise<void>=>{
        const res = await request.get(
            "/api/products"
          );
          expect(res.status).toBe(200);
        
    })

    it("Get the product by its category", async():Promise<void>=>{
        const res = await request.get(
            "/api/products/:category"
          );
          expect(res.status).toBe(200);
        
    })

    it("Get the product by its id", async():Promise<void>=>{
        const res = await request.get(
            "/api/products/:id"
          );
          expect(res.status).toBe(200);
        
    })

})
import supertest from "supertest"
import app from "../../server"
const request = supertest(app)


describe("Test suite for the Order enpoint ", ():void=>{

    // it("Get the api order index routes", async():Promise<void>=>{
    //     const res = await request.get(
    //         "/api/orders/:id"
    //       );
    //       expect(res.status).toBe(200);
        
    // })

    // it("Post new order via index routes", async():Promise<void>=>{
    //     const res = await request.get(
    //         "/api/orders"
    //       );
    //       expect(res.status).toBe(201);
        
    // })

    // it("Get completed order ", async():Promise<void>=>{
    //     const res = await request.get(
    //         "/api/orders/:id/:status"
    //       );
    //       expect(res.status).toBe(200);
        
    // })

    // it("Update the selected order via ", async():Promise<void>=>{
    //     const res = await request.put(
    //         "/api/orders/update"
    //       );
    //       expect(res.status).toBe(200);
        
    // })

})
import supertest from "supertest"
import app from "../../server"
const request = supertest(app)


describe("Test suite for the Category enpoint ", ():void=>{

    it("Get the api order index routes", async():Promise<void>=>{
        const res = await request.get(
            "/api/orders"
          );
          expect(res.status).toBe(200);
        
    })

})
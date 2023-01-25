import supertest from "supertest"
import app from "../../server"
const request = supertest(app)


describe("Test suite for the Category enpoint ", ():void=>{

    it("Get the category index routes", async():Promise<void>=>{
        const res = await request.get(
            "/api/category"
          );
          expect(res.status).toBe(200);
        
    })

})
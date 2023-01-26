// import supertest from "supertest"
// import app from "../../server"
// import dotenv from "dotenv";
// import jwt, { Secret } from "jsonwebtoken"
// import { userStore, User } from "../../models/user"
// const request = supertest(app)

// dotenv.config()

// const token = process.env.TOKEN as Secret;

// describe("Test suite for the Users enpoint ", ():void=>{
//     const user:User = {
//             lastName:"Madoh",
//             firstName:"Francine",
//             password:"franca123",
//             username:"franca"
//     }

//     let auth_token: string,
//     id = 1;

//     it("Get the users api index routes", async():Promise<void>=>{
//         const res = await request.get(
//             "/api/users"
//           );
//           expect(res.status).toBe(200);
        
//     })

//     it("Get the  create user api route", async():Promise<void>=>{
//         const res = await request.post(
//             "/api/users"
//           ).send(user);
//          // @ts-ignore
//          const { data } = jwt.verify(auth_token, token);
//         id = data.id;
//         expect(res.status).toBe(200);
        
//     })

//     it('should get the show user api route', async (done) => {
//         const res = await request.get(`/users/${id}`).set('Auth', 'auth' + auth_token)
//         //.set('Authorization', 'bearer ' + token);
    
//         expect(res.status).toBe(200);
//         done();
//       });
    
//     it('Sign users with provided credentials', async () => {
//         const res = await request.get(`/users/${id}`).set('Auth', 'auth' + auth_token)
//         
    
//         expect(res.status).toBe(200);
      
//       });

// })


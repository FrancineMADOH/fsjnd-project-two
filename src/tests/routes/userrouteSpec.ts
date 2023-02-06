import supertest from "supertest";
import app from "../../server";
import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { userStore, User } from "../../models/user";
import { users, indexedUsers,testToken } from "../models/testsData";
import { verifyToken } from "../../middlewares/authmiddleware";
import _ from 'lodash';
const request = supertest(app);


dotenv.config()

const token = process.env.TOKEN as Secret;
const  peper  = process.env.BCRYPT_PASSWORD;

describe("Test suite for the Users enpoint ", ():void=>{
    const user:User = {
            lastname:"Madoh",
            firstname:"Francine",
            password:"franca123",
            username:"franca"
    }


    it("It should required autorization", async():Promise<void>=>{
        const res = await request.get(
            "/api/users"
          );
          expect(res.status).toBe(401);
        
    });

    it("It should add a new user", async():Promise<void>=>{
        const res = await request.post(
            "/api/users"
          ).set('Authorization', `Bearer ${testToken}`).send(users[0])
          expect(res.status).toBe(201);
    });

    it('Should return the specified user', async ():Promise<void> => {
        const res = await request.get(`/api/users/${1}`)
        .set('Authorization', `Bearer ${testToken}`).send()
        expect(res.status).toBe(200);
      });
    
    it('Sign users with provided credentials', async () => {
        const res = await request.get(`/api/users/${1}`)
        .set('Authorization', `Bearer ${testToken}`).send()

        const matchinPW =  bcrypt.compareSync(user.password+peper, res.body.password)
        expect(matchinPW).toBe(true)
        expect(res.status).toBe(200);
      
      });

})


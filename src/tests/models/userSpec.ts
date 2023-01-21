import { userStore } from "../../models/user";

const store = new userStore()

describe("User store model class", ()=>{

    it("Should have a create method", ()=>{
        expect(store.create).toBeDefined();
    })

    it("Should have an index method", ()=>{
        expect(store.index).toBeDefined();
    })
    it("Should have a show method", ()=>{
        expect(store.show).toBeDefined();
    })

    
    it("Create method should add a user to the db", async()=>{
        const result = await store.create({
            lastName:"Madoh",
            firstName:"Francine",
            password:"franca123",
            id:1
        })

        expect(result).toEqual({
            lastName:"Madoh",
            firstName:"Francine",
            password:"franca123",
            id:1
        })
    })
    it("Index method should return a list of users", async()=>{
        const result = await store.index()

        expect(result).toEqual([{
            lastName:"Madoh",
            firstName:"Francine",
            password:"franca123",
            id:1
        }])

    })
    it("Show method should return the correct user", async()=>{
        const result = await store.show(1)
        expect(result).toEqual({
            lastName:"Madoh",
            firstName:"Francine",
            password:"franca123",
            id:1
        })
    })
    
})
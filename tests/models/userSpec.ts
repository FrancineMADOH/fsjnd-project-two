import { userStore } from "../../src/models/user";

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

    
    it("Create method should add a user to the db", async()=>{})
    it("Index method should return a list of users", async()=>{})
    it("Show method should return the correct user", async()=>{})
    
})
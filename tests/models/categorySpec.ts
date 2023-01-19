import { categoryStore } from "../../src/models/category";

const store = new categoryStore()

describe("Category store model class", ()=>{
    
    it("index method should be defined", ()=>{
        expect(store.index).toBeDefined();
    })

    it("Create method should be define", ()=>{
        expect(store.create).toBeDefined();
    })

    it("Create method should add a category to the db", async()=>{})
    it("Index method should return a list of categories", async()=>{})

    

})
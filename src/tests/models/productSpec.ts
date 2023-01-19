import { productStore } from "../../src/models/product";

const store = new productStore()

describe("Product store model class", ()=>{
    
    it("Index method should be defined", ()=>{
        expect(store.index).toBeDefined();
    })
    it("Index method should be defined", ()=>{
        expect(store.create).toBeDefined();
    })
    it("Index method should be defined", ()=>{
        expect(store.show).toBeDefined();
    })
    it("Topfive method should be defined", ()=>{
        expect(store.topfive).toBeDefined();
    })
    it("Category method should be defined", ()=>{
        expect(store.category).toBeDefined();
    })

    
    it("Create method should add a product to the db", async()=>{})
    it("Index method should return a list of products", async()=>{})
    it("Show method should return the correct products", async()=>{})
    it("Topfive method should return the correct products", async()=>{})
    it("Category method should sort product by category", async()=>{})
})
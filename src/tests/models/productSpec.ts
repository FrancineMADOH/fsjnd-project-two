import { productStore } from "../../models/product";

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

    
    it("Create method should add a product to the db", async():Promise<void>=>{
        const result = await store.create({
            productName: "Madar",
            price:450,
            category:1,
            id:1
        })

        expect(result).toEqual({
            id:1,
            price:450,
            productName:"Madar",
            category:1
        })
    })
    it("Index method should return a list of products", async()=>{
        const result = await store.index()
        expect(result).toEqual([{
            id:1,
            price:450,
            productName:"Madar",
            category:1
        }])
    })
    it("Show method should return the correct product", async()=>{
        const result = await store.show(1)
        expect(result).toEqual({
            id:1,
            price:450,
            productName:"Madar",
            category:1
        })

    })
    it("Topfive method should return the correct products", async():Promise<void>=>{
        
    })
    it("Category method should sort product by category", async():Promise<void>=>{})
})
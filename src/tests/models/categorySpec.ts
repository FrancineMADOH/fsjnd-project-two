import { categoryStore, Category } from "../../models/category";

const store = new categoryStore()

describe("Category store model class", ()=>{
    
    it("index method should be defined", ()=>{
        expect(store.index).toBeDefined();
    })

    it("Create method should be define", ():void=>{
        expect(store.create).toBeDefined();
    })

    it("Index method should return a list of categories", async()=>{
        const result = await store.index();

        expect(result.length).toEqual(1);
    });


    

})
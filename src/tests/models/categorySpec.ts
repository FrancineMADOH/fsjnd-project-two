import { categoryStore } from "../../models/category";

const store = new categoryStore()

describe("Category store model class", ()=>{
    
    it("index method should be defined", ()=>{
        expect(store.index).toBeDefined();
    })

    it("Create method should be define", ():void=>{
        expect(store.create).toBeDefined();
    })

    it("Create method should add a category to the categories table", async():Promise<void>=>{
        const result = await store.create({
            id: 1,
            category:"grocery"
        });

        expect(result).toEqual({
            id:1,
            category:"grocery"
        });
    });
    it("Index method should return a list of categories", async()=>{
        const result = await store.index();

        expect(result).toEqual([{
            id:1,
            category:"grocery"
        }]);
    });

    

})
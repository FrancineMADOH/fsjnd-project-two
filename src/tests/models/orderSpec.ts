import { orderStore } from "../../models/order";

const store = new orderStore()

describe("Order store model class", ()=>{

    it("Should have an index method", ()=>{
        expect(store.completed).toBeDefined();
    })
    it("Should have a show method", ()=>{
        expect(store.show).toBeDefined();
    })

    it("Completed method should return all the order completed by the user",async ():Promise<void>=>{
        const result = await store.completed(1,true)
        expect(result).toEqual([{
            id:1,
            userID:1,
            quantity:2,
            productID:1,
            status:true
        }])
    })
    it("Show method should return all the current order by the selected user", async  ():Promise<void>=>{
        const result = await store.show(1)
        expect(result).toEqual({
            id:1,
            userID:1,
            quantity:2,
            productID:1,
            status:true
        })
    })

    
    
})
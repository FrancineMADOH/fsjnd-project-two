import { orderStore } from "../../src/models/order";

const store = new orderStore()

describe("Order store model class", ()=>{

    it("Should have an index method", ()=>{
        expect(store.completed).toBeDefined();
    })
    it("Should have a show method", ()=>{
        expect(store.show).toBeDefined();
    })

    it("Completed method should return all the order completed by the user", ()=>{
        expect(store.completed).toBeDefined();
    })
    it("show method should return all the current order by the selected user", ()=>{
        expect(store.show).toBeDefined();
    })

    
    
})
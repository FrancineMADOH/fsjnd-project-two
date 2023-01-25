"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../../models/category");
const store = new category_1.categoryStore();
describe("Category store model class", () => {
    it("index method should be defined", () => {
        expect(store.index).toBeDefined();
    });
    it("Create method should be define", () => {
        expect(store.create).toBeDefined();
    });
    it("Create method should add a category to the categories table", async () => {
        const result = await store.create({
            category: "grocery"
        });
        expect(result).toEqual({
            category: "grocery"
        });
    });
    it("Index method should return a list of categories", async () => {
        const result = await store.index();
        expect(result).toEqual([{
                category: "grocery"
            }]);
    });
});

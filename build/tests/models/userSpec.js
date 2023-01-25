"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const store = new user_1.userStore();
describe("User store model class", () => {
    it("Should have a create method", () => {
        expect(store.create).toBeDefined();
    });
    it("Should have an index method", () => {
        expect(store.index).toBeDefined();
    });
    it("Should have a show method", () => {
        expect(store.show).toBeDefined();
    });
    it("Create method should add a user to the db", async () => {
        const result = await store.create({
            lastName: "Madoh",
            firstName: "Francine",
            password: "franca123",
            username: "franca"
        });
        expect(result).toEqual({
            lastName: "Madoh",
            firstName: "Francine",
            password: "franca123",
            username: "franca"
        });
    });
    it("Index method should return a list of users", async () => {
        const result = await store.index();
        expect(result).toEqual([{
                lastName: "Madoh",
                firstName: "Francine",
                password: "franca123",
                username: "franca"
            }]);
    });
    it("Show method should return the correct user", async () => {
        const result = await store.show(1);
        expect(result).toEqual({
            lastName: "Madoh",
            firstName: "Francine",
            password: "franca123",
            username: "franca"
        });
    });
});
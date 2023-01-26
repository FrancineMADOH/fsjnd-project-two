"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryHandler = void 0;
const category_1 = require("../models/category");
const category = new category_1.categoryStore();
class categoryHandler {
    async create(req, res) {
        const data = req.body;
        const newcategory = await category.create(data);
        res.status(201);
        return res.json(newcategory);
    }
    async index(req, res) {
        const allcat = await category.index();
        res.status(200);
        return res.json(allcat);
    }
}
exports.categoryHandler = categoryHandler;

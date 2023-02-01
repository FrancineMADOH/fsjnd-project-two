"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productHandler = void 0;
const product_1 = require("../models/product");
const product = new product_1.productStore();
class productHandler {
    async index(req, res) {
        const allproducts = await product.index();
        res.status(200);
        return res.json(allproducts);
    }
    async create(req, res) {
        const data = {
            productName: req.body.productname,
            price: req.body.price,
            category: req.body.category
        };
        const newproduct = await product.create(data);
        res.json(newproduct);
    }
    async show(req, res) {
        const id = parseInt(req.params.id);
        const oneproduct = await product.show(id);
        return res.json(oneproduct);
    }
    async category(req, res) {
        const cat = parseInt(req.params.category);
        const onecat = await product.category(cat);
        return res.json(onecat);
    }
    async delete(req, res) {
        const id = parseInt(req.params.id);
        const delcat = await product.delete(id);
        return res.json(delcat);
    }
}
exports.productHandler = productHandler;

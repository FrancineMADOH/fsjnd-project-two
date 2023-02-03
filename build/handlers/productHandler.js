"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productHandler = void 0;
const product_1 = require("../models/product");
const product = new product_1.productStore();
class productHandler {
    async index(req, res) {
        try {
            const allproducts = await product.index();
            res.status(200);
            return res.json(allproducts);
        }
        catch (err) {
            console.log(err);
        }
    }
    async create(req, res) {
        try {
            const data = {
                productname: req.body.productname,
                price: req.body.price,
                category: req.body.category
            };
            const newproduct = await product.create(data);
            res.json(newproduct);
        }
        catch (err) {
            console.log(err);
        }
    }
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const oneproduct = await product.show(id);
            return res.json(oneproduct);
        }
        catch (err) {
            console.log(err);
        }
    }
    async category(req, res) {
        try {
            const cat = parseInt(req.params.category);
            const onecat = await product.category(cat);
            return res.json(onecat);
        }
        catch (err) {
            console.log(err);
        }
    }
    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const delcat = await product.delete(id);
            return res.json(delcat);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.productHandler = productHandler;

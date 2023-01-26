"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderHandler = void 0;
const order_1 = require("../models/order");
const order = new order_1.orderStore();
class orderHandler {
    async show(req, res) {
        const user = parseInt(req.params.id);
        const userOrders = await order.show(user);
        res.status(200);
        res.json(userOrders);
    }
    async completed(req, res) {
        const user = parseInt(req.params.id);
        const status = req.params.status;
        const completedorders = await order.completed(user, status);
        res.status(200);
        res.json(completedorders);
    }
    async create(req, res) {
        const data = req.body;
        const neworder = await order.create(data);
        res.status(201);
        res.json(neworder);
        //res.json(userauthToken(newuser))
    }
    async update(req, res) {
        const user = parseInt(req.body.user);
        const quantity = parseInt(req.body.quantity);
        const updateedorder = await order.update(user, quantity);
        res.status(200);
        res.json(updateedorder);
    }
}
exports.orderHandler = orderHandler;

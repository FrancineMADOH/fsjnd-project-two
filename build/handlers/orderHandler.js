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
}
exports.orderHandler = orderHandler;

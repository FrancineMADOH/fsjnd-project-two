"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderHandler_1 = require("../../handlers/orderHandler");
const authmiddleware_1 = require("../../middlewares/authmiddleware");
const orderRouter = express_1.default.Router();
const methods = new orderHandler_1.orderHandler();
const token = new authmiddleware_1.verifyToken();
orderRouter.get("/:id", token.verifyjwt, methods.show);
orderRouter.get("/:id/:status", token.verifyjwt, methods.completed);
orderRouter.post("/", token.verifyjwt, methods.create);
orderRouter.put("/update", token.verifyjwt, methods.update);
exports.default = orderRouter;

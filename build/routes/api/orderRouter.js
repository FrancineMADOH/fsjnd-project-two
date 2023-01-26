"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var orderHandler_1 = require("../../handlers/orderHandler");
var authmiddleware_1 = require("../../middlewares/authmiddleware");
var orderRouter = express_1["default"].Router();
var methods = new orderHandler_1.orderHandler();
var token = new authmiddleware_1.verifyToken();
orderRouter.get("/:id", token.verifyjwt, methods.show);
orderRouter.get("/:id/:status", token.verifyjwt, methods.completed);
exports["default"] = orderRouter;

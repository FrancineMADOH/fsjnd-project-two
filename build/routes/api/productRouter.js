"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var productHandler_1 = require("../../handlers/productHandler");
var authmiddleware_1 = require("../../middlewares/authmiddleware");
var productRouter = express_1["default"].Router();
var methods = new productHandler_1.productHandler();
var token = new authmiddleware_1.verifyToken();
productRouter.get("/", methods.index);
productRouter.post("/", token.verifyjwt, methods.create);
productRouter.get("/:category", methods.category);
productRouter.get("/:id", methods.show);
productRouter["delete"]("/:id", methods["delete"]);
exports["default"] = productRouter;

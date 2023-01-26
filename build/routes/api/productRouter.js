"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productHandler_1 = require("../../handlers/productHandler");
const authmiddleware_1 = require("../../middlewares/authmiddleware");
const productRouter = express_1.default.Router();
const methods = new productHandler_1.productHandler();
const token = new authmiddleware_1.verifyToken();
productRouter.get("/", methods.index);
productRouter.post("/", token.verifyjwt, methods.create);
productRouter.get("/:category", methods.category);
productRouter.get("/:id", methods.show);
productRouter.delete("/:id", token.verifyjwt, methods.delete);
exports.default = productRouter;

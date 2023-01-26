"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var categoryHandler_1 = require("../../handlers/categoryHandler");
var catRouter = express_1["default"].Router();
var methods = new categoryHandler_1.categoryHandler();
catRouter.get("/", methods.index);
catRouter.post("/", methods.create);
exports["default"] = catRouter;

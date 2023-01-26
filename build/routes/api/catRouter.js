"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const categoryHandler_1 = require("../../handlers/categoryHandler");
const catRouter = express_1.default.Router();
const methods = new categoryHandler_1.categoryHandler();
catRouter.get("/", methods.index);
catRouter.post("/", methods.create);
exports.default = catRouter;

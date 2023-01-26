"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userHandler_1 = require("../../handlers/userHandler");
const authmiddleware_1 = require("../../middlewares/authmiddleware");
const userRouter = express_1.default.Router();
const methods = new userHandler_1.userHandler();
const token = new authmiddleware_1.verifyToken();
userRouter.get("/", token.verifyjwt, methods.index);
userRouter.post("/", token.verifyjwt, methods.create);
userRouter.get("/signin", token.verifyjwt, methods.signin);
userRouter.get("/:id", token.verifyjwt, methods.show);
userRouter.put("/update", token.verifyjwt, methods.update);
exports.default = userRouter;

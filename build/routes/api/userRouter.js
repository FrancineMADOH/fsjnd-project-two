"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var userHandler_1 = require("../../handlers/userHandler");
var authmiddleware_1 = require("../../middlewares/authmiddleware");
var userRouter = express_1["default"].Router();
var methods = new userHandler_1.userHandler();
var token = new authmiddleware_1.verifyToken();
userRouter.get("/", token.verifyjwt, methods.index);
userRouter.post("/", token.verifyjwt, methods.create);
userRouter.get("/signin", token.verifyjwt, methods.signin);
userRouter.get("/:id", token.verifyjwt, methods.show);
exports["default"] = userRouter;

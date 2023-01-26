"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var orderRouter_1 = __importDefault(require("./api/orderRouter"));
var productRouter_1 = __importDefault(require("./api/productRouter"));
var userRouter_1 = __importDefault(require("./api/userRouter"));
var catROuter_1 = __importDefault(require("./api/catROuter"));
var router = express_1["default"].Router();
router.get("/", function (req, res) {
    res.send("main API route");
});
router.use("/products", productRouter_1["default"]);
router.use("/users", userRouter_1["default"]);
router.use("/category", catROuter_1["default"]);
router.use("/orders", orderRouter_1["default"]);
exports["default"] = router;

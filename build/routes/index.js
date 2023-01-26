"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderRouter_1 = __importDefault(require("./api/orderRouter"));
const productRouter_1 = __importDefault(require("./api/productRouter"));
const userRouter_1 = __importDefault(require("./api/userRouter"));
const catROuter_1 = __importDefault(require("./api/catROuter"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("main API route");
});
router.use("/products", productRouter_1.default);
router.use("/users", userRouter_1.default);
router.use("/category", catROuter_1.default);
router.use("/orders", orderRouter_1.default);
exports.default = router;

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
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerOptions = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "A Storefront Backend",
            version: "1.0.1",
            description: "  The following rest api simulate the backend of a e-commerce website based on 4 models categories, users, orders, products. A list of the enpoints is available in the REQUIREMENTS.md file",
        },
    },
    apis: ["src/routes/api/**/*.ts"]
};
const swagerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("main API route");
});
router.use("/products", productRouter_1.default);
router.use("/users", userRouter_1.default);
router.use("/category", catROuter_1.default);
router.use("/orders", orderRouter_1.default);
exports.default = router;
router.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagerDocs));

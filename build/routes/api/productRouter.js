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
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get the list of products
 *     responses:
 *       200:
 *         description: All products
 *       500:
 *         description: Internal Server Error
 */
productRouter.get("/", methods.index);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - productname
 *               - price
 *               - category
 *             properties:
 *               productname:
 *                 type: string
 *               price:
 *                  type: number
 *               category:
 *                   type: number
 *     responses:
 *       200:
 *         description: Product created
 *       500:
 *         description: Internal Server Error
 *       401:
 *         description: Unauthorized
 */
productRouter.post("/", token.verifyjwt, methods.create);
/**
 * @swagger
 * /api/products/{category}:
 *   get:
 *     summary: Get the list of products by category
 *     parameters:
 *       - name: category
 *         in: path
 *         required: true
 *         description: The category to filter products by
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Products in the specified category
 *       500:
 *         description: Internal Server Error
 */
productRouter.get("/:category", methods.category);
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the product to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Product details
 *       500:
 *         description: Internal Server Error
 */
productRouter.get("/:id", methods.show);
/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Update a product by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the product to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       500:
 *         description: Internal Server Error
 *       401:
 *         description: Unauthorized
 */
productRouter.delete("/:id", token.verifyjwt, methods.delete);
exports.default = productRouter;

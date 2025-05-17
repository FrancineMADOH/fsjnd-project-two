"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderHandler_1 = require("../../handlers/orderHandler");
const authmiddleware_1 = require("../../middlewares/authmiddleware");
const orderRouter = express_1.default.Router();
const methods = new orderHandler_1.orderHandler();
const token = new authmiddleware_1.verifyToken();
/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get the list of orders
 *     responses:
 *       200:
 *         description: All orders
 *       500:
 *         description: Internal Server Error
 */
orderRouter.get("", methods.show); //token.verifyjwt,
/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get the list of orders
 *     responses:
 *       200:
 *         description: All orders
 *       500:
 *         description: Internal Server Error
 */
orderRouter.get("/:id/:status", token.verifyjwt, methods.completed);
/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *               - user_id
 *             properties:
 *               status:
 *                 type: string
 *               user_id:
 *                  type: number
 *     responses:
 *       200:
 *         description: Order created
 *       500:
 *         description: Internal Server Error
 */
orderRouter.post("/", token.verifyjwt, methods.create);
/**
 * @swagger
 * /api/orders:
 *   put:
 *     summary: Update an order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *               - user_id
 *             properties:
 *               status:
 *                 type: string
 *               user_id:
 *                  type: number
 *     responses:
 *       200:
 *         description: Order updated
 *       500:
 *         description: Internal Server Error
 */
orderRouter.put("/update", token.verifyjwt, methods.update);
exports.default = orderRouter;

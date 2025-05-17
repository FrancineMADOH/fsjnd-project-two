import express, {Request, Response} from "express";
import { orderHandler } from "../../handlers/orderHandler";
import { verifyToken } from "../../middlewares/authmiddleware";


const orderRouter = express.Router()
const methods = new orderHandler();
const token =  new verifyToken();


/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get the list of orders for a particular user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: All orders
 *       500:
 *         description: Internal Server Error
 */
orderRouter.get("/:id",  methods.show) //token.verifyjwt,
/**
 * @swagger
 * /api/orders/{id}/{status}:
 *   get:
 *     summary: Get the list of completed orders
 *     responses:
 *       200:
 *         description: All orders
 *       500:
 *         description: Internal Server Error
 */
orderRouter.get("/:id/:status", token.verifyjwt, methods.completed)
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
orderRouter.post("/",token.verifyjwt, methods.create)
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
orderRouter.put("/update",token.verifyjwt, methods.update)



export default orderRouter;
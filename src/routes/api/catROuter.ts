import express, {Request, Response} from "express";
import { categoryHandler } from "../../handlers/categoryHandler";


const catRouter = express.Router()
const methods = new categoryHandler();

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Get the list of products category
 *     requestBody:
 *       required: False
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category
 *             properties:
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: All categories
 *       500:
 *         description: Internal Server Error
 */
catRouter.get("/", methods.index)


/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Create a new product category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - category
 *             properties:
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Category created
 *       500:
 *         description: Internal Server Error
 */
catRouter.post("/", methods.create)


export default catRouter;
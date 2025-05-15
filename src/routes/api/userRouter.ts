import express, {Request, Response} from "express";
import { userHandler } from "../../handlers/userHandler";
import { verifyToken } from "../../middlewares/authmiddleware";




const userRouter = express.Router()
const methods = new userHandler()
const token = new verifyToken();


/**
 * @swagger
 * /api/users:
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
userRouter.get("/", token.verifyjwt, methods.index )
/**
 * @swagger
 * /api/users:
 *   post:
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
userRouter.post("/", token.verifyjwt ,methods.create)
/**
 * @swagger
 * /api/users/signin:
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
userRouter.get("/signin", token.verifyjwt , methods.signin)
/**
 * @swagger
 * /api/user/{id}:
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
userRouter.get("/:id", token.verifyjwt, methods.show)
/**
 * @swagger
 * /api/users/update:
 *   put:
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
userRouter.put("/update", token.verifyjwt, methods.update)



export default userRouter;

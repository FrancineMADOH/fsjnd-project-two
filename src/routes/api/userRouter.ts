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
 *     summary: Get the list of Users 
 *     responses:
 *       200:
 *         description: All Users
 *       500:
 *         description: Internal Server Error
 *       401:
 *         description: Unauthorized
 */
userRouter.get("/", token.verifyjwt, methods.index )
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: True
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstname
 *               - lastname
 *               - password
 *               - username
 *             properties:
 *               firstname:
 *                  type: string
 *               lastname:
 *                   type: string
 *               password:
 *                    type: string
 *               username:
 *                     type: string
 *     responses:
 *       200:
 *         description:  Register a new user
 *       500:
 *         description: Internal Server Error
 *       401:
 *        description: Unauthorized
 *       400:
 *        description: Bad Request
 * 
 */
userRouter.post("/" ,methods.create) //token.verifyjwt

/**
 * @swagger
 * /api/users/signin:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: True
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *               - username
 *             properties:
 *               
 *               password:
 *                    type: string
 *               username:
 *                     type: string
 *     responses:
 *       200:
 *         description:  Register a new user
 *       500:
 *         description: Internal Server Error
 *       401:
 *        description: Unauthorized
 *       400:
 *        description: Bad Request
 * 
 */
userRouter.post("/signin" , methods.signin) //, token.verifyjwt


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details
 *       500:
 *         description: Internal Server Error
 */
userRouter.get("/:id", methods.show)  // token.verifyjwt,

/**
 * @swagger
 * /api/users/update/{user}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - name: user
 *         in: path
 *         required: true
 *         description: The ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                     type: string
 *
 * responses:
 *       200:
 *         description: User details updated
 *       500:
 *         description: Internal Server Error
 */

userRouter.put("/update/:user", methods.update)// token.verifyjwt,



export default userRouter;

import express, {Request, Response} from "express";
import { userHandler } from "../../handlers/userHandler";
import { verifyToken } from "../../middlewares/authmiddleware";


const userRouter = express.Router()
const methods = new userHandler()
const token = new verifyToken();

userRouter.get("/", token.verifyjwt, methods.index )
userRouter.post("/", token.verifyjwt ,methods.create)
userRouter.get("/signin", token.verifyjwt , methods.signin)
userRouter.get("/:id", token.verifyjwt, methods.show)
userRouter.put("/update", token.verifyjwt, methods.update)




export default userRouter;
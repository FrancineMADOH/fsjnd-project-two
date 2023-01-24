import express, {Request, Response} from "express";
import { userHandler } from "../../handlers/userHandler";


const userRouter = express.Router()
const methods = new userHandler()

userRouter.get("/",methods.index )
userRouter.post("/",methods.create)
//userRouter.get("/:id", methods.show)
userRouter.get("/signin", methods.signin)


export default userRouter;
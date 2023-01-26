import express, {Request, Response} from "express";
import { orderHandler } from "../../handlers/orderHandler";
import { verifyToken } from "../../middlewares/authmiddleware";


const orderRouter = express.Router()
const methods = new orderHandler();
const token =  new verifyToken();


orderRouter.get("/:id", token.verifyjwt, methods.show)
orderRouter.get("/:id/:status", token.verifyjwt, methods.completed)
orderRouter.post("/",token.verifyjwt, methods.create)
orderRouter.put("/update",token.verifyjwt, methods.update)



export default orderRouter;
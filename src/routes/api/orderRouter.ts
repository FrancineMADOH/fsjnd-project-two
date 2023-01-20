import express, {Request, Response} from "express";
import { orderHandler } from "../../handlers/orderHandler";


const orderRouter = express.Router()
const methods = new orderHandler();


orderRouter.get("/", methods.show)
orderRouter.get("/completed", methods.completed)


export default orderRouter;
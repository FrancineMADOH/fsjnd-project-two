import express, {Request, Response} from "express";
import { orderHandler } from "../../handlers/orderHandler";


const orderRouter = express.Router()
const methods = new orderHandler();


orderRouter.get("/:id", methods.show)
orderRouter.get("/:id/:status", methods.completed)


export default orderRouter;
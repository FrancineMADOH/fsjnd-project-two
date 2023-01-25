import express, {Request, Response} from "express";
import { categoryHandler } from "../../handlers/categoryHandler";


const catRouter = express.Router()
const methods = new categoryHandler();

catRouter.get("/", methods.index)
catRouter.post("/", methods.create)


export default catRouter;
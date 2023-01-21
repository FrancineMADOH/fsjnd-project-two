import express, {Request, Response} from "express";
import { productHandler } from "../../handlers/productHandler";


const productRouter = express.Router()
const methods =  new productHandler()

productRouter.get("/",methods.index)
productRouter.post("/",methods.create)
productRouter.get("/:id",methods.show)
productRouter.get("/:category",methods.category)


export default productRouter;
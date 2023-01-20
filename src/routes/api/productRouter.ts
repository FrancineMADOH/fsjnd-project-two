import express, {Request, Response} from "express";
import { productHandler } from "../../handlers/productHandler";


const productRouter = express.Router()
const methods =  new productHandler()

productRouter.get("/",methods.index)
productRouter.post("/",methods.create)
productRouter.get("/product",methods.show)
productRouter.get("/top",methods.topfive)


export default productRouter;
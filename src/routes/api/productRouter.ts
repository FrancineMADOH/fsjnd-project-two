import express, {Request, Response} from "express";
import { productHandler } from "../../handlers/productHandler";
import { verifyToken } from "../../middlewares/authmiddleware";

const productRouter = express.Router()
const methods =  new productHandler()
const token = new verifyToken()

productRouter.get("/",methods.index)
productRouter.post("/",token.verifyjwt, methods.create)
productRouter.get("/:category",methods.category)
productRouter.get("/:id",methods.show)
productRouter.delete("/:id", methods.delete)



export default productRouter;
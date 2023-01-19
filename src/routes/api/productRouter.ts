import express, {Request, Response} from "express";


const productRouter = express.Router()

productRouter.get("/",(req:Request, res:Response)=>{
    res.send("product route")
})


export default productRouter;
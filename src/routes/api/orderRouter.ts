import express, {Request, Response} from "express";


const orderRouter = express.Router()

orderRouter.get("/",(req:Request, res:Response)=>{
    res.send("category route")
})


export default orderRouter;
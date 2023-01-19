import express, {Request, Response} from "express";


const catRouter = express.Router()

catRouter.get("/",(req:Request, res:Response)=>{
    res.send("category route")
})


export default catRouter
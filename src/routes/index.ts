import express, {Request, Response} from "express";
import catRouter from "./api/catROuter";
import orderRouter from "./api/orderRouter";
import productRouter from "./api/productRouter";
import userRouter from "./api/userRouter";


const router = express.Router()
router.get("/",(req:Request, res:Response)=>{
    res.send("main API route")
})

router.use("/products",productRouter)
router.use("/users", userRouter)
router.use("/category", catRouter)
router.use("/orders", orderRouter)


export default router;
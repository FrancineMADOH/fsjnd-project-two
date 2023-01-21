import express, {Request, Response} from "express";
import orderRouter from "./api/orderRouter";
import productRouter from "./api/productRouter";
import userRouter from "./api/userRouter";
import catRouter from "./api/catRouter";

const router = express.Router()
router.get("/",(req:Request, res:Response)=>{
    res.send("main API route")
})

router.use("/products",productRouter)
router.use("/users", userRouter)
router.use("/category", catRouter)
router.use("/orders", orderRouter)


export default router;
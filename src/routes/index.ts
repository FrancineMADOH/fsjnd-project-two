import express, {Request, Response} from "express";
import orderRouter from "./api/orderRouter";
import productRouter from "./api/productRouter";
import userRouter from "./api/userRouter";
import catRouter from "./api/catROuter";

import swaggerJsDoc from  "swagger-jsdoc";
import swagerUI from "swagger-ui-express"

const swaggerOptions = {

    definition: {
      openapi: "3.1.0",
      info: {
        title: "A Storefront Backend",
        version: "1.0.1",
        description:"  The following rest api simulate the backend of a e-commerce website based on 4 models categories, users, orders, products. A list of the enpoints is available in the REQUIREMENTS.md file",
      },
    },
    apis: ["src/routes/api/**/*.ts" ]
  }
  
const swagerDocs = swaggerJsDoc(swaggerOptions);

const router = express.Router()
 
router.get("/",(req:Request, res:Response)=>{
    res.send("main API route")
})

router.use("/products",productRouter)
router.use("/users", userRouter)
router.use("/category", catRouter)
router.use("/orders", orderRouter)


 export default router;
 router.use('/api-docs', swagerUI.serve, swagerUI.setup(swagerDocs));



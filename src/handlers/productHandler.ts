
import express, {Request, Response} from "express";
import { productStore } from "../models/product";

const product = new productStore()

export class productHandler {

    async index(req:Request, res:Response){
        const allproducts = await product.index()
        res.status(200)
        res.json(allproducts)

    }

    async create(req:Request, res:Response){
        const data = req.body
        const newproduct = await product.create(data)
        res.json(newproduct)

    }

    async show(req:Request, res:Response){
        const id =  parseInt(req.params.id)
        const oneproduct = await product.show(id)
        res.json(oneproduct)
    }

    async topfive(req:Request, res:Response){
        const top = await product.topfive()
        res.json(top)

    }
}



// import express, { Request, Response } from "express";
// import { Book,bookStore } from "../models/book";

// const book = new bookStore();


// export class BookHandler {
//     async index(req:Request, res:Response){
//         const allbooks = await book.index();
//         res.json(allbooks)
//     }

//     async create(req:Request, res:Response){
//       const data = req.body
//       const onebook = await book.create(data)
//       res.status(201)
//       res.json(onebook)
        
//     }
// }
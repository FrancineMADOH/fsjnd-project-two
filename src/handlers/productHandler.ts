
import express, {Request, Response} from "express";
import { Product, productStore } from "../models/product";

const product = new productStore()

export class productHandler {

    async index(req:Request, res:Response){
        const allproducts = await product.index()
        res.status(200)
        return res.json(allproducts)

    }

    async create(req:Request, res:Response){
        const data:Product = {
           productName: req.body.productname,
           price :req.body.price,
           category: req.body.category
        }
        const newproduct = await product.create(data)
        res.json(newproduct)

    }

    async show(req:Request, res:Response){
        const id =  parseInt(req.params.id)
        const oneproduct = await product.show(id)
        return res.json(oneproduct)
    }

    async category(req:Request, res:Response){
        const cat =  parseInt(req.params.category) 
        const onecat = await product.category(cat)
        return res.json(onecat)
    }

    async delete(req:Request, res:Response){
        const id =  parseInt(req.params.id) 
        const delcat = await product.delete(id)
        return res.json(delcat)
    }
}




import express, {Request, Response} from "express";
import { Product, productStore } from "../models/product";

const product = new productStore()

export class productHandler {

    async index(req:Request, res:Response){
        try{
            const allproducts = await product.index()
        res.status(200)
        return res.json(allproducts)

        }catch(err){
res.status(500).json({message: "Internal Server Error"})

            console.log(err)}
        
    }

    async create(req:Request, res:Response){
        try{
            const data:Product = {
                productname: req.body.productname,
                price :req.body.price,
                category: req.body.category
             }
             const newproduct = await product.create(data)
             res.json(newproduct)
        }catch(err){
            res.status(500).json({message: "Internal Server Error"})
            console.log(err)}
        

    }

    async show(req:Request, res:Response){
        try{
        const id =  parseInt(req.params.id)
        const oneproduct = await product.show(id)
        return res.json(oneproduct)
        }catch(err){console.log(err)}
        
    }

    async category(req:Request, res:Response){
        try{
        const cat =  parseInt(req.params.category) 
        const onecat = await product.category(cat)
        return res.json(onecat)
        }catch(err){
            res.status(500).json({message: "Internal Server Error"})
            console.log(err)}
        
    }

    async delete(req:Request, res:Response){
        try{
        const id =  parseInt(req.params.id) 
        const delcat = await product.delete(id)
        return res.json(delcat)
        }catch(err){
            res.status(500).json({message: "Internal Server Error"})
            console.log(err)}
        
    }
}



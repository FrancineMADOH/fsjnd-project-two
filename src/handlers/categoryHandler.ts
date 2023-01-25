import express, {Request, Response} from "express";
import { categoryStore } from "../models/category";

const category =  new categoryStore()

export class categoryHandler{

    async create(req:Request, res:Response){
        const data = req.body
        const newcategory =  await category.create(data)
        res.status(201)
        return res.json(newcategory)  
    }

    async index(req:Request, res:Response){
         const allcat = await category.index()
        res.status(200)
        return res.json(allcat)
        
    }

}

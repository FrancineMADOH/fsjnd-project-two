
import express, {Request,Response} from "express";
import { orderStore } from "../models/order";

const order = new orderStore();
export class orderHandler {

    async show(req:Request,res:Response){
        const user = parseInt( req.params.id)
        const userOrders = await order.show(user);
        res.status(200)
        res.json(userOrders)
    }

    async completed(req:Request, res:Response){
        const user = parseInt(req.params.id)
        const status =  req.params.status as unknown as boolean
       
       const completedorders = await order.completed(user,status)
       res.status(200)
       res.json(completedorders)
    }

    async create(req:Request, res:Response){
        const data = req.body
        const neworder = await order.create(data)
        res.status(201)
        res.json(neworder)
        //res.json(userauthToken(newuser))
    }

    async update(req:Request,res:Response){
        const user = parseInt( req.body.user)
        const quantity = parseInt( req.body.quantity)
        const updateedorder = await order.update(user,quantity) ;
        res.status(200)
        res.json(updateedorder)
    }
}

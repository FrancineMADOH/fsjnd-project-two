
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
        const status =  Boolean(req.params.status)
        const user = parseInt(req.params.id)

        const completedorders = await order.completed(user,status)
        res.status(200)
        res.json(completedorders)
    }
}

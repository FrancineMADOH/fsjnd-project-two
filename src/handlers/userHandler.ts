import express, {Request, Response} from "express"

import { userStore } from "../models/user"

const user = new userStore()

export class userHandler {

    async index(req:Request, res:Response){
        const alluser = await user.index()
        return res.json(alluser)

    }

    async create(req:Request, res:Response){
        const data = req.body
        const newuser = await user.create(data)
        res.status(201)
        res.json(newuser)
    }

    async show(req:Request, res:Response){
        const id = parseInt(req.params.id)
        const oneuser = await user.show(id)
        res.json(oneuser)
    }

}
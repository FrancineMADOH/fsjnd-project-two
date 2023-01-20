import express, {Request, Response} from "express"

import { userStore } from "../models/user"

const user = new userStore()

export class userHandler {

    async index(req:Request, res:Response){
        const alluser = user.index()
        res.json(alluser)

    }

    async create(req:Request, res:Response){
        const data = req.body
        const alluser = user.create(data)
        res.json(alluser)
    }

    async show(req:Request, res:Response){
        const id = parseInt(req.params.id)
        const alluser = user.show(id)
        res.json(alluser)
    }

}
import express, {Request, Response} from "express"

import { userStore, User } from "../models/user"
import { userauthToken } from "../middlewares/authmiddleware"

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
        //res.json(userauthToken(newuser))
    }

    async show(req:Request, res:Response){
        const id = parseInt(req.params.id)
        const oneuser = await user.show(id)
        res.json(oneuser)
    }

    async signin(req:Request, res:Response){
        const data = {
            username: req.body.username,
            password: req.body.password,
          }
        if(!data.username || !data.password) {
            res.status(400);
            res.send(
              'Missing auth params'
            );
            return false;
          }

        const auth_param  = await user.signin(data.username, data.password);
          if (!auth_param) {
            return res.status(401).send(`Wrong credentials for user ${data.username}.`);
          }
        console.log('auth succed !')
        res.json(userauthToken(data.username) )
    }

}
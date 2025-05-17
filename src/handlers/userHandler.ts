import express, {Request, Response} from "express"

import { userStore, User } from "../models/user"
import { userauthToken } from "../middlewares/authmiddleware"

const user = new userStore()

export class userHandler {

    async index(req:Request, res:Response){
      try{
        const alluser = await user.index()
        return res.json(alluser)
      }catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
      }
    }

    async create(req:Request, res:Response){
      try{
        const data = req.body
        const newuser = await user.create(data)
        res.status(201)
        res.json(newuser)
      }catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
      }
       
    }

    async show(req:Request, res:Response){
      try{
        const id = parseInt(req.params.id)
        const oneuser = await user.show(id)
        res.json(oneuser)
      }catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
      }
        
    }

    async signin(req:Request, res:Response){
      try{
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
      }catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
      }
        
    }

    async update(req:Request,res:Response){
      try{
      const id = req.params.user
      const username = req.body.username
      const updateuser = await user.update(username,Number(id))
      res.status(200).json(updateuser)
      }catch(err){
        console.log(err)
        res.status(500).json({message: "Internal Server Error"})
      }
      
  }

}
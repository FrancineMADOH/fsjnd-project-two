import dotenv from "dotenv";
import jwt, { Secret } from "jsonwebtoken";
import express, { NextFunction, Request,Response } from "express";
import { userStore,User } from "../models/user";


dotenv.config();
const TOKEN = process.env.TOKEN as Secret;

export const userauthToken =  (user:User)=>{
    return jwt.sign({user}, TOKEN)
   
}

export class verifyToken{
     verifyjwt(req:Request,res: Response,next:NextFunction){
         if (!req.headers.authorization) {
        res.status(401).json({ error: 'Acces denied' });
        return false;
      }
        try{
            const authToken = req.headers.authorization.split(' ')[1];
            jwt.verify(authToken, TOKEN);
            next();
        }catch(err){
            res.status(401).json('Acces denied');
            return err;
        }
     }
}
    // if (!req.headers.authorization) {
    //     res.status(401).json({ error: 'Acces denied' });
    //     return false;
    //   }
    // try{
    //         
   
    






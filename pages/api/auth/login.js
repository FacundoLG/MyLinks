import { NextApiRequest, NextApiResponse } from "next";
import {excuteQuery} from './../../../lib/db'
import bcrypt from 'bcrypt'

export default async function Login(req = NextApiRequest, res = NextApiResponse) {
    if(req.method !== "POST") return res.status(500).json({error:"Only post method alowed"}) 
    const {username,email,password} = req.body
        if(username || email && password){
                try {
                    const results = await excuteQuery({
                        query: 'SELECT * FROM users WHERE username = ?',
                        values: [username]
                    })
                  if(results[0]){
                    bcrypt.compare(password,results[0].password,(err,same) => {
                        if(err){ res.status(500).send({error: "err"})}
                        if(same){
                            res.status(200).send({
                                message: "done",
                                results
                            })
                        }else{
                            res.status(400).send({err: "Wrong Conbination"})
                        }
                    })
                  }
                } catch(err) {                    
                res.status(400).send({error:"wrong password"})
                }          
        }  else {
            res.status(400).send({error:"bad request"})
        } 
}
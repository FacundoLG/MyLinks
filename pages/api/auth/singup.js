import { NextApiRequest, NextApiResponse } from "next";
import {excuteQuery} from './../../../lib/db'
import bycrypt from 'bcrypt'
const rounds = 10


export default async function SingUp(req = NextApiRequest, res = NextApiResponse) {
    if(req.method !== "POST") return res.status(500).json({error:"Only post method alowed"}) 
    const {username,email,password,confirmPassword} = req.body
    if(username && email && password && confirmPassword){
        if(password === confirmPassword){
            try {
                    await bycrypt.hash(password,rounds,(err,result) => {
                        if(err){ res.status(500).send({error: "err"})}
                        
                        const results =  excuteQuery({
                            query: 'INSERT INTO users (username,email,password) VALUES (?,?,?)',
                            values: [username,email,result]
                        })
                        res.status(200).send({
                            message: "done",
                            results
                        })
                    })
                } catch(err) {
                res.status(500).send({error:"err"})
                    
                }          
            } else {
            res.status(400).send({error:"Passwords do not match"})
            }

        }  else {
            res.status(400).send({error:"bad request"})
        } 

}
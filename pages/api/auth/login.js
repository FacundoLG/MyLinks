import { NextApiRequest, NextApiResponse } from "next";
import {excuteQuery} from './../../../lib/db'

export default function Login(req = NextApiRequest, res = NextApiResponse) {
    if(req.method !== "POST") return res.status(500).json({error:"Only post method alowed"}) 
    // const {username,email,password} = req.body
    //     if(username && email && password && confirmPassword){
    //         if(password === confirmPassword){
    //             try {
    //                 const results = await excuteQuery({
    //                     query: 'INSERT INTO users (username,email,password) VALUES (?,?,?)',
    //                     values: [username,email,password]
    //                 })
    //                 res.status(200).send({
    //                     message: "done",
    //                     results
    //                 })
    //             } catch(err) {
    //             res.status(400).send({error:"err"})
                    
    //             }          
    //         } else {
    //         res.status(400).send({error:"Passwords do not match"})
    //         }

    //     }  else {
    //         res.status(400).send({error:"bad request"})
    //     } 
}
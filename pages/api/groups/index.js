import { NextApiRequest, NextApiResponse } from "next";
import {excuteQuery} from "../../../lib/db"

export default async function groups(req = NextApiRequest,res = NextApiResponse) {
    const {userid,password} = req.query
    if(!password) res.status(401).json({error: "You are not authorized"})
    switch(req.method){
        case "GET":
            try {
                const result = await excuteQuery({
                    query: ' SELECT groups.name as GrupName, groups.id as id FROM `groups` WHERE groups.user_id= ?;',
                    values: [userid]
                })
                res.status(200).send({
                    result,
                })
            } catch(err) {
                console.log(err)
            }
            break;
        case "POST":
            const {name,color} = req.body
            try{
                const result = await excuteQuery({
                    query: 'INSERT INTO `groups` (user_id,name,color) VALUES (?,?,?);',
                    values: [userid,name,color]
                })
                res.status(200).send({
                    result,
                })
            }catch(err){
                console.log(err)

            }
    }
}   
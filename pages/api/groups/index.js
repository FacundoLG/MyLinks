import { NextApiRequest, NextApiResponse } from "next";
import {excuteQuery} from "../../../lib/db"

export default async function groups(req = NextApiRequest,res = NextApiResponse) {
    const {userId,password} = req.body
    if(!password) res.status(401).json({error: "You are not authorized"})
    try {
        const result = await excuteQuery({
            query: ' SELECT groups.name as GrupName, groups.id as id FROM `groups` WHERE groups.user_id= ?;',
            values: [userId]
        })
        res.status(200).send({
            result
        })
    } catch(err) {
        console.log(err)
    }
}   
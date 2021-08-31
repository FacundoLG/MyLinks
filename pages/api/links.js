import { NextApiRequest, NextApiResponse } from "next";
import {excuteQuery} from "../../lib/db"

export default async function links(req = NextApiRequest,res = NextApiResponse) {
    const {userId,groupId,password} = req.body
    if(!password) res.status(401).json({error: "You are not authorized"})
    try {
        const result = await excuteQuery({
            query: ' SELECT links.name as GrupName, links.id as id FROM `links` WHERE links.user_id= ? AND links.group_id = ?;',
            values: [userId,groupId]
        })
        res.status(200).send({
            result
        })
    } catch(err) {
        console.log(err)
    }
}   
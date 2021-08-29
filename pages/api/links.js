import { NextApiRequest, NextApiResponse } from "next";
import {excuteQuery} from "../../lib/db"

export default async function links(req = NextApiRequest,res = NextApiResponse) {
    const {userId,password} = req.body
    if(!password) res.status(401).json({error: "You are not authorized"})
    try {
        const groups = await excuteQuery({
            query: 'SELECT * FROM groups WHERE user_id = ?',
            values: [userId]
        })
        const links = await excuteQuery({
            query: 'SELECT * FROM links WHERE user_id = ?',
            values:[userId]
        })
    } catch(err) {
        console.log(err)
    }
}   
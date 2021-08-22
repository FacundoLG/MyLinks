import { NextApiRequest, NextApiResponse } from "next";

export default function SingUp(req = NextApiRequest, res = NextApiResponse) {
    if(req.method !== "POST") return res.status(500).json({error:"Only post method alowed"}) 
    
}
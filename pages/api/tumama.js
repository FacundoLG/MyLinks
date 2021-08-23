import { values } from "lodash"
import {excuteQuery} from "../../lib/db"
export default async function adduser(req , res ) {
    const user = {
        username: "FacundoTEST",
        email: "facundoTEST",
        password: "123123test"
    }
    try {
        const results = await excuteQuery({
            query: 'INSERT INTO users (username,email,password) VALUES (?,?,?)',
            values: [user.username, user.email, user.password]
        })
        res.status(200).json({results})
    } catch(err) {
        console.log(err)
    }
    
}
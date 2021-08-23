import { async } from 'regenerator-runtime';
import mysql from 'serverless-mysql';
const dbparams = {
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: 'root',
    password: process.env.PASSWORD
}
const db = mysql({
    config: dbparams
})

export async function excuteQuery ({query,values}) {
    console.log(dbparams)
    try{
        const results = await db.query(query,values);
        await db.end()
        return results
    } catch (err) {
        return {err}
    }
}
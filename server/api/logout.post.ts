import jwt from "jsonwebtoken"

type User = {
    email: string
    name: string
    id: string,
    password: string,
    created_at: string,
}

export default defineEventHandler(async(event)=>{
    try{
        const token = getCookie(event, "token") as string
        const user = jwt.verify(token, "secret") as User
        if(user){
            setCookie(event, "token", "", {expires: new Date(0)})
            return{
                statusCode: 200,
                message: "Logged out"
            }
        }
    } catch(e){
        console.error(e)
        return{
            statusCode: 401,
            message: "Unauthorized"
        }
    }
})
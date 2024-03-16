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

        const userData = {
            email: user.email,
            name: user.name
        }

        return{
            statusCode: 200,
            userData
        }
    } catch(e){
        console.error(e)
        return{
            statusCode: 401,
            message: "Unauthorized"
        }
    }
})
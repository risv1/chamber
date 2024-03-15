import { z } from "zod"
import bcrypt from "bcrypt"
import { db } from "~/utils/db"
import { users } from "~/schema"
import { eq } from "drizzle-orm"
import jwt from "jsonwebtoken"

type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    created_at: string
}

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event)
        const givenData = await schema.parseAsync({
            email: body.email,
            password: body.password
        })

        const [user] = await db.select().from(users).where(eq(body.email, users.email))
        if(!user){
            return{
                statusCode: 404,
                message: "User not found"
            }
        }
        const passwordMatch = await bcrypt.compare(body.password, user.password)
        if (!passwordMatch) {
            return {
              statusCode: 401,
              message: "Password does not match",
            };
          }
        
        return{
            statusCode: 200,
            message: "Login successful"
        }

    } catch(e){
        console.error(e)
    }
})
import { z } from "zod"
import bcrypt from "bcrypt"
import { db } from "~/utils/db"
import { users } from "~/schema"
import { eq } from "drizzle-orm"
import jwt from "jsonwebtoken"

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

        const [user] = await db.select().from(users).where(eq(users.email, givenData.email))
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

        const token = jwt.sign(user, "secret", {expiresIn: "24h"})
        
        setCookie(event, "token", token, {httpOnly: true, sameSite: true})

        return{
            statusCode: 200,
            message: "Login successful",
            user: {
                email: user.email,
                name: user.name
            }
        }

    } catch(e){
        console.error(e)
    }
})
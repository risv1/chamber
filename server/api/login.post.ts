import { z } from "zod"
import { supabase } from "~/supabase.config"
import bcrypt from "bcrypt"
import { User } from "~/models/user"

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

        const {data, error} = await supabase
            .from('users')
            .select()
            .filter('email', 'eq', givenData.email)
            .single()

        if (error) {
            throw error
        }
        if (!data) {
            throw new Error('User not found')
        }

        const user = data as User
        const passwordMatch = await bcrypt.compare(givenData.password, user.password)
        if (!passwordMatch) {
            throw new Error('Invalid password')
        }

        console.log(user)

        return {
            status: 200,
            body: {
                email: user.email,
                name: user.name,
            }
        }

    } catch(e){
        console.error(e)
    }
})
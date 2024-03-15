import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { db } from "~/utils/db";
import { users } from "~/schema";

const schema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string(),
  created_at: z.string().datetime(),
});

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const id = uuidv4();
    const created_at = new Date().toISOString();

    const data = {
      id: id,
      name: body.name,
      email: body.email,
      password: await hashPassword(body.password),
      created_at: created_at,
    };

    const userData = await schema.parseAsync(data);
    if (!userData) {
      throw createError({
        statusCode: 412,
        statusMessage: "Not valid",
      });
    }

    const user = await db
      .insert(users)
      .values({
        ...body,
        id: userData.id,
        name: userData.name,
        email: userData.email,
        password: userData.password,
        created_at: userData.created_at,
      });

      if(user){
        console.log(user)
      }else{
        console.error("Not pushed to db")
      }

  } catch (e: any) {
    console.error("bro errors: ", e);
  }
});

import { z } from "zod";

const configSchema = z.object({
    DB_URL: z.string().default(process.env.DB_URL!),
});

export const { DB_URL } = configSchema.parse(process.env);
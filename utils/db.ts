import { drizzle } from "drizzle-orm/postgres-js"
import { DB_URL } from "./schemaConfig" 
import postgres from "postgres"

const client = postgres(DB_URL)
export const db = drizzle(client)
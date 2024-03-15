import { pgTable, text, varchar, date } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
    id: varchar("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    created_at: date("created_at").defaultNow(),
  });
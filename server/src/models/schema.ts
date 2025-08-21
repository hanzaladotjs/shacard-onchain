
import { integer, pgEnum, pgTable, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  imageUrl: text(),
  name: varchar({ length: 255 }).notNull(),
  username: varchar({length: 255}).notNull().unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  stage: varchar({length:255}).default("newbie"),
  password: text().notNull()
});

export const postsTable = pgTable("posts", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    imageUrl: text(),
    caption: text(),
    userId: integer().references(()=> usersTable.id, {onDelete: "cascade"}).notNull(),
    created_at: timestamp({withTimezone: true}).defaultNow()
})


export const offerTable = pgTable("offers", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    image: text().notNull(),
    title: varchar({length: 255}).notNull(),
    description: text(), 
    userId:integer().references(()=> usersTable.id, {onDelete: "cascade"}).notNull(),
    created_at: timestamp({withTimezone: true}).defaultNow()
})

export const messageTable = pgTable("messages", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  content: text().notNull(),
  senderId: integer().references(()=> usersTable.id, {onDelete: "cascade"}),
  receiverId: integer().references(()=> usersTable.id, {onDelete:"cascade"}),
  created_at: timestamp({withTimezone: true}).defaultNow() 
})

export const proposalStatusEnum = pgEnum("proposal_status", [
  "pending",
  "accepted",
  "rejected"
]);

export const proposalTable = pgTable("proposals", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  whichOffer: integer().references(() => offerTable.id, {onDelete: "cascade"}),
  theProposal: text().notNull(),
  whoSent: integer().references(()=> usersTable.id, {onDelete: "cascade"}),
  created_at: timestamp({withTimezone: true}).defaultNow(),
  status: proposalStatusEnum("status").default("pending").notNull(),

})
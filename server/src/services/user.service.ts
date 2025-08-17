import bcrypt from "bcryptjs"
import { offerTable, postsTable, usersTable } from "../models/schema"
import { eq } from "drizzle-orm"
import { sign } from "hono/jwt"





export const signup = async ({ email, username, password, name, db, JWT_SECRET }: any) => {

    if (!email || !username || !password) {
        throw new Error("check inputs ")
    }

    const exist = await db.select().from(usersTable).where(eq(usersTable.email, email));

    if (exist.length > 0) {
        throw new Error("user already exits")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const [newUser] = await db.insert(usersTable).values({
        email: email,
        username: username,
        password: hashedPassword,
        name: name
    }).returning()

    const token = await sign({ email: newUser.email, name: newUser.name, username: newUser.username, id: newUser.id }, JWT_SECRET)

    return {
        token
    }
}

export const signin = async ({ identity, password, db, JWT_SECRET }: any) => {

    if (!identity || !password) {
        throw new Error("check inputs")
    }

    const isEmail = identity.includes("@")

    const [existsUser] = await db.select().from(usersTable).where(isEmail ? eq(usersTable.email, identity) : eq(usersTable.username, identity))

    if (!existsUser) {
        throw new Error("user deosnt exist")
    }

    const check = await bcrypt.compare(password, existsUser.password)

    if (!check) {
        throw new Error("wrong password")
    }

    const token = await sign({ username: existsUser.username, name: existsUser.name, id: existsUser.id, email: existsUser.email }, JWT_SECRET)

    return {
        token
    }

}

export const myProfile = async ({ userId, db }: any) => {
    const [user] = await db.select({ imageUrl: usersTable.imageUrl, name: usersTable.name, username: usersTable.username, stage: usersTable.stage }).from(usersTable).where(eq(usersTable.id, userId))
    const posts = await db.select({ imageUrl: postsTable.imageUrl, caption: postsTable.caption, created: postsTable.created_at }).from(postsTable).where(eq(postsTable.userId, userId))
    const offers = await db.select({ imageUrl: offerTable.image, title: offerTable.title, description: offerTable.description, created: offerTable.created_at })


    if (!user) {
        throw new Error("something is wrong")
    }

    return {

        user: user, posts: posts, offers: offers, msg: "fetched"
    }

}

export const theirProfile = async ({id, db}: any) => {

    const [user] = await db.select({ imageUrl: usersTable.imageUrl, name: usersTable.name, username: usersTable.username, stage: usersTable.stage }).from(usersTable).where(eq(usersTable.id, id)).returning()
    const posts = await db.select({ imageUrl: postsTable.imageUrl, caption: postsTable.caption, created: postsTable.created_at }).from(postsTable).where(eq(postsTable.userId, id)).returning()
    const offers = await db.select({ imageUrl: offerTable.image, title: offerTable.title, description: offerTable.description, created: offerTable.created_at }).from(offerTable).where(eq(offerTable.userId, id)).returning()

    if (!user) {
        throw new Error("something is wrong")
    }

    return {

        user: user, posts: posts, offers: offers, msg: "fetched"
    }
}
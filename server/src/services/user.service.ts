import bcrypt from "bcryptjs"
import { usersTable } from "../models/schema"
import { eq } from "drizzle-orm"
import { sign } from "hono/jwt"



type Signup = {
    email: string,
    username: string,
    password: any,
    name: string,
    db: any,
    JWT_SECRET: string
}
type Signin = {
    identity: string,
    password: string,
    db: any,
    JWT_SECRET: string
}

export const signup = async ({ email, username, password, name, db, JWT_SECRET }: Signup) => {

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

    const token =  await sign({email: newUser.email, name: newUser.name, username: newUser.username, id: newUser.id}, JWT_SECRET)

    return {
        token
    }
}

export const signin = async ({ identity, password , db, JWT_SECRET}: Signin) => {

    if (!identity || !password) {
        throw new Error("check inputs")
    }

    const isEmail= identity.includes("@")

        const [existsUser] = await db.select().from(usersTable).where( isEmail ? eq(usersTable.email, identity): eq(usersTable.username, identity) )

        if (existsUser.length == 0) {
            throw new Error("user deosnt exist")
        }

        const check = await bcrypt.compare(password, existsUser.password)

        if(!check){
            throw new Error("wrong password")
        }

        const token = await sign({username: existsUser.username, name: existsUser.name, id: existsUser.id, email: existsUser.email }, JWT_SECRET)

        return {
           
            token
        }

}
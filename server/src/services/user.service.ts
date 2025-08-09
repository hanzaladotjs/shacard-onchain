import bcrypt from "bcrypt"
import db from "../utils/db"
import { usersTable } from "../models/schema"
import { eq } from "drizzle-orm"


type Signup = {
    email: string,
    username: string,
    password: string
}

export const signup = async ({email, username, password}: Signup) => {

    if(!email || !username || !password){
      throw new Error ("check inputs ")
    }

    const exist = await  db.select().from(usersTable).where(eq(usersTable.username, username));

    if(exist.length > 0){
        throw new Error("user already exits")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const [newUser] = await db.insert(usersTable).values({
        email: email,
        username: username,
        password: hashedPassword
    }).returning()

return newUser;




}
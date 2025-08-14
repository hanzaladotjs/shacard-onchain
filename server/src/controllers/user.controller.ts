import { Context } from "hono"
import { signin, signup } from "../services/user.service"


export const signUpController = async (c: Context) => {

    const body = await c.req.json()

    const { email, password, username, name } = body

    const db = c.get("db")

    const JWT_SECRET = c.get("jwt")

    const register = await signup({ email, password, username, name, db, JWT_SECRET })

    return c.json({
        token: register.token
    }
    )

}

export const signInController = async (c: Context) => {
    const body = await c.req.json()
    const db = c.get('db')
    const JWT_SECRET = c.get("jwt")
    const { identity, password } = body

    const login = await signin({ identity, password, db, JWT_SECRET })

    return c.json({
        token: login.token
    })


}
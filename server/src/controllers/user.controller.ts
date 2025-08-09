import {Context } from "hono"
import { signup } from "../services/user.service"

export const signUpController = async (c:Context) => {

    const body = await c.req.json()

    const {email, password, username, name} = body

    const user = await signup({email, password, username, name})

    if(user){
        return(
        c.json({
            msg: "user created"
        }, 200)

    )
        
    }
}
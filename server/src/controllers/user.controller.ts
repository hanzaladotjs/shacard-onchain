import { Context } from "hono"
import { myProfile, signin, signup } from "../services/user.service"


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

export const myProfileController = async ( c: Context) => {
    const db= c.get("db")
    const userId = c.get("userId")

    const myProfileData = await myProfile({userId, db})

    if(!myProfileData){
        return c.json({
            msg: "error"
        })
    }

    return c.json({
        userDetails: myProfileData.user,
        postsOfUser: myProfileData.posts,
        offersOfUser: myProfileData.offers,
        msg: myProfileData.msg
    })
}

export const theirProfileController = async (c: Context) => {
    const db= c.get("db")
    
    const id = c.req.query()

    const theirProfileData = await myProfile({id, db})

    if(!theirProfileData){
        return c.json({
            msg: "error"
        })
    }

    return c.json({
        userDetails: theirProfileData.user,
        postsOfUser: theirProfileData.posts,
        offersOfUser: theirProfileData.offers,
        msg: theirProfileData.msg
    })
}
import { Context } from "hono"
import { exploreAllUsers, myProfile, signin, signup, updateProfile } from "../services/user.service"

type signupBody = {
    email: string, 
    password: string,
    username: string,
    name: string
}

type siginBody = {
    identity: string,
    password: string
}


export const signUpController = async (c: Context) => {

    const body = await c.req.json()

    const { email, password, username, name }: signupBody = body

    const db = c.get("db")

    const JWT_SECRET = c.env.JWT_SECRET

    const register = await signup({ email, password, username, name, db, JWT_SECRET })

    return c.json({
        token: register.token
    }
    )

}

export const signInController = async (c: Context) => {
    const body = await c.req.json()
    const db = c.get('db')
    const JWT_SECRET = c.env.JWT_SECRET
    const { identity, password } : siginBody = body

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
    
    const id = c.req.query("id")

    const theirProfileData = await myProfile({id, db})

    if(theirProfileData.msg == "error" ){
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

export const updateProfileController = async (c: Context) => {
    const db = c.get("db")
    const userId = c.get("userId")
    const body = await c.req.json()
    const { name, username, imageUrl } = body

    const updateProfileData = await updateProfile({ userId, db, name, username, imageUrl })

    return c.json({
        msg: updateProfileData.msg
    })
}

export const exploreAllUsersController = async (c: Context) => {
    const db = c.get("db")
    const exploreAllUsersData = await exploreAllUsers({ db })

    return c.json({
        users: exploreAllUsersData.users,
        msg: exploreAllUsersData.msg
    })
}


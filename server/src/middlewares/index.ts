import { Context, Next } from "hono";
import { verify } from "hono/jwt";


export default async function middleware(c: Context, next: Next) {

    const JWT_SECRET = c.get("jwt")

    if(!JWT_SECRET){
        return c.json({
            msg: "no access token"
        })
    }

    const authHeader = c.req.header("authorization")

    if(!authHeader){
        return c.json({
            msg: "unauthorized"
        })
    }

    const token = authHeader.split(" ")[1]
    const verifyThis = await verify(token, JWT_SECRET )

    c.set("userId", verifyThis.id)

    return await next()


}
import { Hono } from "hono"
import { userRouter } from "./user.routes"
import { postRouter } from "./post.routes"

export const mainRouter = new Hono()


mainRouter.route("/users", userRouter)
mainRouter.route("/posts", postRouter)
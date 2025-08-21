import { Hono } from "hono"
import { userRouter } from "./user.routes"
import { postRouter } from "./post.routes"
import { offerRouter } from "./offer.routes"

export const mainRouter = new Hono()


mainRouter.route("/users", userRouter)
mainRouter.route("/posts", postRouter)
mainRouter.route("/offers", offerRouter)
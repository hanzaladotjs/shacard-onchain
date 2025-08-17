import { Hono } from "hono";
import { myProfileController, signInController, signUpController, theirProfileController } from "../controllers/user.controller";
import middleware from "../middlewares";


export const userRouter = new Hono()

userRouter.post("/signup", signUpController)
userRouter.post("/signin", signInController)
userRouter.get("/me", middleware, myProfileController)
userRouter.get("/them", theirProfileController)
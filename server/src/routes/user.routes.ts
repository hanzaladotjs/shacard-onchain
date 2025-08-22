import { Hono } from "hono";
import { exploreAllUsersController, myProfileController, signInController, signUpController, theirProfileController, updateProfileController } from "../controllers/user.controller";
import middleware from "../middlewares";


export const userRouter = new Hono()

userRouter.post("/signup", signUpController)
userRouter.post("/signin", signInController)
userRouter.get("/me", middleware, myProfileController)
userRouter.get("/them", theirProfileController)
userRouter.put("/update", middleware, updateProfileController)
userRouter.get("/explore", exploreAllUsersController)
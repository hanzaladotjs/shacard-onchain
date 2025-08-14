import { Hono } from "hono";
import { postController, postDeleteController, postUpdateController } from "../controllers/post.controller";
import middleware from "../middlewares";

export const postRouter = new Hono()

postRouter.post("/send",middleware, postController)
postRouter.put("/update",middleware, postUpdateController)
postRouter.delete("/del",middleware, postDeleteController)



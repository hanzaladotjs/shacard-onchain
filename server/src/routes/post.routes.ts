import { Hono } from "hono";
import { getPostsController, postController, postDeleteController, postUpdateController } from "../controllers/post.controller";
import middleware from "../middlewares";

export const postRouter = new Hono()

postRouter.get("/get",  getPostsController)
postRouter.post("/send",middleware, postController)
postRouter.put("/update:id ",middleware, postUpdateController)
postRouter.delete("/del:id",middleware, postDeleteController)



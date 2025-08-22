import { Hono } from "hono";
import { seeInboxController, seeMessagesController, sendMessageController } from "../controllers/message.controller";
import middleware from "../middlewares";

export const messagesRouter = new Hono()

messagesRouter.get("/", middleware, seeMessagesController)
messagesRouter.post("/send", middleware, sendMessageController)
messagesRouter.get("/inbox", middleware, seeInboxController)
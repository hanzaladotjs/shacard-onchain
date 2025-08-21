import { Hono } from "hono";
import { deleteOfferController, getOffersController, postOfferController, updateOfferController } from "../controllers/offer.controller";
import middleware from "../middlewares";

export const offerRouter = new Hono()

offerRouter.get("/", getOffersController)
offerRouter.post("/post", middleware, postOfferController)
offerRouter.put("/update", middleware, updateOfferController)
offerRouter.delete("/update", middleware, deleteOfferController)




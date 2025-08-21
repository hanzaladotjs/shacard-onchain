
import { Hono } from "hono";
import { seeProposalsController, sendProposalController, statusOfProposalController } from "../controllers/proposal.controller";
import middleware from "../middlewares";

export const proposalRouter = new Hono();


proposalRouter.post("/send", middleware, sendProposalController);
proposalRouter.put("/status", middleware, statusOfProposalController);
proposalRouter.get("/see", middleware, seeProposalsController);
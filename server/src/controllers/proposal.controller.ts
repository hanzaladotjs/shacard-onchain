import { Context } from "hono";
import { seeProposals, sendProposal, statusOfProposal } from "../services/proposal.service";

export const sendProposalController = async (c: Context) => {
    const db = c.get("db")
    const userId = c.get("userId")

    const {  offerId, proposalText } = await c.req.json()

    const proposal = await sendProposal({ db, userId, offerId, proposalText });

    return c.json({
        msg: proposal.msg
    }, 200);
}

export const seeProposalsController = async (c: Context) => {  
    const db = c.get("db")
    const offerId = c.req.query("offerId")

    const proposals = await seeProposals({ db, offerId });

    return c.json({
        msg: proposals.msg,
        proposals: proposals.proposals
    }, 200);
}

export const statusOfProposalController = async (c: Context) => {  
    const db = c.get("db")
    const id= c.req.query("id")
    const { statusOfProp } = await c.req.json()  
    const status = await statusOfProposal({ db, id, statusOfProp })

    return c.json({
        msg: status.msg
    }, 200);
}
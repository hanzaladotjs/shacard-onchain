import { eq } from "drizzle-orm"
import { proposalTable } from "../models/schema"

export const sendProposal = async ({db, userId, offerId, theProposal }:any) => {
    const [proposal] = await db.insert(proposalTable).values({
        whichOffer: offerId,
        theProposal: theProposal,
        whoSent: userId
    }).returning()

    if(proposal){
        return{
            msg: "proposal sent"
        }
    }else{
        return {
            msg: "not send"
        }
    }
    
}

export const seeProposals = async ({db, offerId}:any) => {
    const see = await db.select().from(proposalTable).where(eq(proposalTable.whichOffer, offerId))

    if(see.length == 0){
        return {
            msg: "no proposals yet"
        }
    }

    return {
        msg: "retrieved PROPS",
        proposals: see
    }

}

export const statusOfProposal = async ({db, id, statusOfProp}:any)=>{
    const [status] = await db.update(proposalTable).set({status: statusOfProp}).where(eq(proposalTable.id, id)).returning()

    if(!status){
        return {
            msg: "not update"
        }
    }

    return {
        msg: "offer update"
    }
}
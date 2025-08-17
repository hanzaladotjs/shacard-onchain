import { and, eq } from "drizzle-orm"
import { offerTable } from "../models/schema"

export const getOffers = async({db}:any) => {
    const offers = await db.select({imageUrl: offerTable.image, title: offerTable.title, description: offerTable.description, userId: offerTable.description, created: offerTable.created_at}).from(offerTable)

    if(offers.length === 0){
        return {
            msg: "no posts "
        }
    }
    return {
        offers: offers,
        msg: "fetched"
    }
}

export const postOffer = async({imageUrl, title, description, userId, db}:any) => {
   const [offer] = await db.insert(offerTable).values({image: imageUrl, title: title, description: description, userId: userId}).returning()

   if(!offer){
    throw new Error("something is wrong")
   }
   return {
    msg: "posted",
    offer: offer
   }
}

export const updateOffer = async({imageUrl, title, description, userId, id, db}:any) => {
    const [offer] = await db.update(offerTable).set({image: imageUrl, title: title, description: description}).where(and(eq(offerTable.userId, userId), eq(offerTable.id, id))).returning()

    if(!offer){
        throw new Error("something is wrong")
    }
    return {
        msg: "updated",
        offer: offer
    }
}

export const deleteOffer = async({userId, id, db}:any) => {
    const [offer] = await db.delete(offerTable).where(and(eq(offerTable.userId, userId), eq(offerTable.id, id))).returning()

    if(!offer){
        throw new Error("something is wrong")
    }
    return {
        msg: "deleted",
        offer: offer
    }
}

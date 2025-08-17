import { Context } from "hono"
import { getOffers, postOffer, updateOffer, deleteOffer } from "../services/offer.service"

type Offer = {
    imageUrl: string
    title: string
    description: string
    userId: string
}

export const getOffersController = async (c:Context) => {
    const db = c.get("db")
    const offers = await getOffers({db})

    return c.json({
        msg: offers.msg,
        offers: offers.offers
    }, 200)
}   

export const postOfferController = async (c:Context) => {
    const db = c.get("db")
    const {imageUrl, title, description, userId}:Offer = await c.req.json()
    const offer = await postOffer({imageUrl, title, description, userId, db})

    return c.json({
        msg: offer.msg,
        offer: offer.offer
    }, 200)
}

export const updateOfferController = async (c:Context) => {
    const db = c.get("db")
    const id = c.req.query("id")
    const {imageUrl, title, description, userId}:Offer = await c.req.json()
    const offer = await updateOffer({imageUrl, title, description, userId, id, db})

    return c.json({
        msg: offer.msg,
        offer: offer.offer
    }, 200)
}

export const deleteOfferController = async (c:Context) => {
    const db = c.get("db")
    const id = c.req.query("id")
    const userId = c.get("userId")
    const offer = await deleteOffer({userId, id, db})

    return c.json({
        msg: offer.msg,
        offer: offer.offer
    }, 200)
}   
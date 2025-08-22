import { Context } from "hono"
import { seeInbox, seeMessages, sendMessage } from "../services/message.services"

export const sendMessageController = async (c: Context) => {  
    const db = c.get("db")
    const userId = c.get("userId")
    const receiverId = c.req.query("receiverId")
    
    const { content } = await c.req.json()

    const message = await sendMessage({ db, content, userId, receiverId })

    return c.json({
        msg: message.msg
    }, 200)
}

export const seeMessagesController = async (c: Context) => {  
    const db = c.get("db")
    const userId = c.get("userId")
    const receiverId = c.req.query("receiverId")

    const messages = await seeMessages({ db, userId, receiverId })



    return c.json({
        msg: messages.msg,
        messages: messages.allMessages
    }, 200)
}

export const seeInboxController = async (c: Context) => {  
    const db = c.get("db")
    const userId = c.get("userId")
    const inbox = await seeInbox({ db, userId })

    return c.json({
        msg: inbox.msg,
        inbox: inbox.inbox
    }, 200)

}
import { and, asc, desc, eq, or } from "drizzle-orm"
import { messageTable, proposalTable } from "../models/schema"

export const sendMessage = async ({db, content, userId, receiverId}: any) => {

    // const permission = await db.select().from(proposalTable).where(and(eq(proposalTable.status, "accepted"), eq(proposalTable.whoSent, userId), eq(proposalTable.whichOffer,))))

    const [message] = await db.insert(messageTable).values({ 
        content: content, 
        senderId: userId, 
        receiverId: receiverId
    }).returning()

    if(!message){
        return {
            msg: "not sent"
        }
    }

    return {
        msg: "message sent"
    }
}

export const seeMessages = async ({db, userId, receiverId}: any) => {
    const renderMessages = await db.select().from(messageTable).where(and(eq(messageTable.senderId, userId), eq(messageTable.receiverId, receiverId))).orderby(asc(messageTable.created_at))  
      if(renderMessages.length == 0){
        return {
            msg: "no messages yet"
        }
    }
    return {
        msg: "messages fetched",
        
        allMessages: renderMessages
    }

}

export const seeInbox = async ({db, userId}: any) => {
    const myInbox = await db.select().from(messageTable).where(or(eq(messageTable.receiverId, userId), eq(messageTable.senderId, userId))).orderby(desc(messageTable.created_at))

    if(myInbox.length == 0){
        return {
            msg: "no messages in inbox"
        }
    }
    return {
        msg: "inbox fetched",
        inbox: myInbox
    }
}
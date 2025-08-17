import { and, eq } from "drizzle-orm"
import { postsTable } from "../models/schema"


export const getPosts = async ({db}:any) => {
   const posts = await db.select({imageUrl: postsTable.imageUrl, caption: postsTable.caption, created: postsTable.created_at, userId: postsTable.userId}).from(postsTable)
   if(posts.length == 0){
      return {
         msg: "no posts"
      }
   }
   return {
      msg: "posts fetched",
      posts: posts
   }

}

export const post = async ({imageUrl, caption, userId, db}:any) => {

    const insert=  await db.insert(postsTable).values({
        imageUrl: imageUrl, caption: caption, userId:userId
    }).returning()

    if(insert.length == 0){
      return {
         msg: "not posted"
      }
    }

    return {
       msg: "post sent"
    }
}

export const updatePost = async ({imageUrl, caption, id, userId, db}:any) => {

   const update = await db.update(postsTable).set({imageUrl: imageUrl, caption: caption}).where(and(eq(postsTable.id, id) , eq(postsTable.userId, userId))).returning()

   if(update.length == 0){
      return {
         msg: "not updated"
      }
   }

   return {
      msg: "post updated"
   }
}


export const deletePost = async({id, userId, db}:any) => {
   const purge = await db.delete(postsTable).where(and(eq(postsTable.id, id), eq(postsTable.userId, userId))).returning()

   if(purge.length == 0){
      return {
         msg: "not deleted"
      }
   }

   return {
      msg : "successfully deleted"
   }
}

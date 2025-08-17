import { Context } from "hono";
import { deletePost, getPosts, post, updatePost } from "../services/post.service";
import { postsTable } from "../models/schema";
import { eq } from "drizzle-orm";

interface postBody {
    imageUrl: string,
    caption: string
}

export const getPostsController = async (c:Context) => {
    const db = c.get("db")

    const posts = await getPosts({db})

    return c.json({
        msg: posts.msg,
        posts: posts.posts
    }, 200)
}

export const postController = async (c:Context) => {
    const body = await c.req.json()

    const {imageUrl, caption}: postBody = body

    const db = c.get("db")
    
    const userId = c.get("userId")

    if (!db || !userId){
        return c.json({
            msg: "somethings missing"
        })
    }
    const cnfirmPost = await post({imageUrl, caption, userId, db})
    
    return c.json({
        msg: cnfirmPost.msg
    }, 200)
}

export const postUpdateController = async (c: Context) => {
 const  db = c.get("db")
    const id = c.req.query("id")

    

    const findUpdateTarget = await db.select().from(postsTable).where(eq(postsTable.id, Number(id)))

    if(findUpdateTarget.length === 0){
        return c.json({
            msg: "couldn't find target"
        })
    }

     const body = await c.req.json()



    const {imageUrl, caption}:postBody = body

   
    const userId = c.get("userId")

    const confirmPostUpdate = await updatePost({imageUrl, caption, id: Number(id), userId, db})

    return c.json({
        msg: confirmPostUpdate.msg
    },200)


}

export const postDeleteController = async (c:Context) => {
    const {id} = c.req.query()
    const db = c.get("db")

    const findUpdateTarget = await db.select().from(postsTable).where(eq(postsTable.id, Number(id)))

    if(findUpdateTarget.length === 0){
        return c.json({
            msg: "couldn't find target"
        })
    }
    const userId = c.get("userId")

    const purged = await deletePost({id, userId, db})

    return c.json({
        msg: purged.msg
    }, 200)
}
import { Context, Hono, Next } from 'hono'
import { mainRouter } from './routes'
import getDb from './utils/db';


type Env = {
  DATABASE_URL: string,
  JWT_SECRET: string
};

const app = new Hono<{ Bindings: Env, Variables: any}>();
app.use('*', async (c: Context, next: Next) => {
  const db = getDb(c.env.DATABASE_URL)
  c.set('db', db)
  await next()
})

app.route("/api", mainRouter)

app.onError((err:Error, c: Context) => {
  console.error(err)
  return c.json({ error: 'Something went wrong' }, 500)
})


export default app

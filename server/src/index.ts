import { Hono } from 'hono'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
const app = new Hono()
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle({ client: sql });


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

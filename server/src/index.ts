import { Hono } from 'hono'

import { mainRouter } from './routes'
import getDb from './utils/db';
import { env } from 'hono/adapter';

type Env = {
  DATABASE_URL: string,
  JWT_SECRET: string
};

const app = new Hono<{ Bindings: Env }>();
const db = await getDb(env.DATABASE_URL)


app.route("/api", mainRouter)


export default app

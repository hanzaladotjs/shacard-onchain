// db.ts
import { drizzle } from 'drizzle-orm/postgres-js';
import { Env } from 'hono';
import postgres from 'postgres';

function getDb(dburi: string) {
  const client =  postgres(dburi);
  return drizzle(client);
}


export default getDb
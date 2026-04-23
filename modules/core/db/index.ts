import { env } from '@/config/env';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as authSchema from './schema/auth.schema';


export const db = drizzle(env.DATABASE_URL, {schema: {...authSchema}});
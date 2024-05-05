import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as dbSchema from './schema';

export const connection = await mysql.createConnection(process.env.DB_URL!);
export const db = drizzle(connection, { mode: 'default', schema: dbSchema });

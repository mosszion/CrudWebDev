import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: '/Users/mussie/Desktop/mossFullStackProjects/CrudWebDev/crud-backend/.env' });

const { Pool } = pg;
const pool = new Pool({
 host: process.env.PGHOST ,
 database: process.env.PGDATABASE ,
 user: process.env.PGUSER ,
 password: process.env.PGPASSWORD ,
 port: process.env.PGPORT,
 ssl: {
   rejectUnauthorized: false
 }
});
console.log('host:', process.env.PGHOST);
pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch(err => console.error('Connection error', err.stack));

export default pool;

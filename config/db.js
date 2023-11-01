import { createPool } from "mysql2";

const db = createPool({
  host: process.env.NEXT_PUBLIC_MYSQLHOST,
  user: process.env.NEXT_PUBLIC_MYSQLUSER,
  password: process.env.NEXT_PUBLIC_MYSQLPASSWORD,
  database: process.env.NEXT_PUBLIC_MYSQLDATABASE,
  port: process.env.NEXT_PUBLIC_MYSQLPORT,
  waitForConnections: true,
  connectionLimit: 10,
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

db.getConnection((err) => {
    if(err) {
        console.log('Error Connecting to Database: ', err)
    } else {
        console.log('Connected to Database')
    }
})


export default db;

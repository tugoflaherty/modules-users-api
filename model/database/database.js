// Imports ---------------------------------------
import mysql from "mysql2/promise";

// Database Connection ---------------------------
const dbConfig = {
  database: process.env.MODULES_USERS_API_DB_NAME || "unibase",
  port: process.env.MODULES_USERS_API_DB_PORT || 3306,
  host: process.env.MODULES_USERS_API_DB_HOST || "localhost",
  user: process.env.MODULES_USERS_API_DB_USER || "root",
  password: process.env.MODULES_USERS_API_DB_PSWD || "",
  namedPlaceholders: true,
};

const createConnectionPool = () => {
  try {
    return mysql.createPool({
      ...dbConfig,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  } catch (error) {
    console.log("Error creating database connection: " + error.message);
    process.exit();
  }
};

export default createConnectionPool();
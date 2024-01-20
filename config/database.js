import { Sequelize } from "sequelize";
import mysql from "mysql2";

const config = {
  host: "localhost",
  database: "maunonton",
  username: "root",
  password: "",
};

const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  dialectModule: mysql,
});

try {
  await db.authenticate();
} catch (err) {
  console.error(err);
}

export default db;

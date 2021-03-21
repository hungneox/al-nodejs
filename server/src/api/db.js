import path from 'path';

const sqlite3 = require('sqlite3').verbose();
const db_name = path.join(__dirname, '../data', 'alphasense.db');
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'alphasense.db'");
});

export default db;

export const mysql = require('mysql');
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'author'
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});
module.export=connection;
// RETUNS MYSQL DATABASE

const mysql = require('mysql');
const { error } = require('handy-log');
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, MYSQL_PORT } = process.env;

// CREATES A DB CONNECTION
const db = mysql.createConnection({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  port: MYSQL_PORT,
  charset: 'utf8mb4',
})

// CONNECTS DB
db.connect(err=> {
  if (err) {
    error("db error: " + err.message)
  }
});

// var db_config = {
//   host: MYSQL_HOST,
//   user: MYSQL_USER,
//   password: MYSQL_PASSWORD,
//   database: MYSQL_DATABASE,
//   port: MYSQL_PORT,
//   charset: 'utf8mb4',
//   debug    :  true,
//   wait_timeout : 28800,
//   connectTimeout  : 60 * 60 * 1000,
//   acquireTimeout  : 60 * 60 * 1000,
//   timeout         : 60 * 60 * 1000,
//   connectionLimit : 1000,
//   waitForConnections : true,
//   queueLimit :0,
// };

// var mysql_pool  = mysql.createPool({
//   connectionLimit : 100,
//   host            : MYSQL_HOST,
//   user            : MYSQL_USER,
//   password        : MYSQL_PASSWORD,
//   database        : MYSQL_DATABASE,
//   port            : MYSQL_PORT,
//   charset         : 'utf8mb4',
// });

// mysql_pool.getConnection((err, connection) => {
//    if (err) {
//     // connection.release();
//     console.log(' Error getting mysql_pool connection: ' + err);
//     throw err;
//   }
// });

module.exports = db


const mysql = require("mysql");

const koneksi = mysql.createConnection({
  // connectionLimit: 10,
  host: "34.101.34.5", //"localhost",
  user: "root",
  password: "12345*",
  database: "banksampah",
});

koneksi.connect((err) => {
  // if (err) throw err;
  console.log("mysql connected");
});

// koneksi.getConnection(function(err,connection) {
//   // if (err) throw err;
//   console.log("mysql connected");
// });

// pool.getConnection(function (err, connection) {
//   connection.query("SELECT table_bank FROM banksampah", function (err, rows) {
//     console.log(pool._freeConnections.indexOf(connection)); // -1

//     connection.release();

//     console.log(pool._freeConnections.indexOf(connection)); // 0
//   });
// });

module.exports = koneksi;

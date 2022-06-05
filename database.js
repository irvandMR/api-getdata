const mysql = require("mysql");

const koneksi = mysql.createConnection({
  host: "34.101.34.5", //"localhost",
  user: "root",
  password: "12345*",
  database: "banksampah",
});

koneksi.connect((err) => {
  // if (err) throw err;
  console.log("mysql connected");
});

module.exports = koneksi;

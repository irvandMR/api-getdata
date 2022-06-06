const express = require("express");
const bodyParser = require("body-parser");
const koneksi = require("./database");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/data", (req, res) => {
  const querySql = "SELECT * FROM tabel_bank";

  koneksi.query(querySql, (err, rows, field) => {
    if (err) {
      return res.status(500).json({
        msg: "ada kesalahan",
        error: err,
      });
    }
    res.status(200).json({ success: true, data: rows });
  });
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

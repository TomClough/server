const express = require("express");
const app = express();

//get request, send response
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//localhost
app.listen(5000);

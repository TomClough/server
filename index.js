const express = require("express");
const app = express();

//get request, send response
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//localhost
const PORT = process.env.PORT || 5000;
app.listen(PORT);

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/return", (req, res) => {
  res.sendFile(path.join(__dirname + "/returnPage.html"));
});

app.listen(port, () => {
  console.log("thanks for connecting to this server");
});

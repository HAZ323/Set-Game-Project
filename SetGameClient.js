const express = require("express");
const path = require("path");

let app = express();

let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.listen(3001, () => console.log("Starting up Set Game Client"));

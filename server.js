const express = require("express");
const path = require("path");
const server = require("../data/routing/apiRoutes")

const app = express();

const PORT = 8080

app.listen(PORT, function(){
    console.log(`Server is listening on: http://localhost:${PORT}`);
})



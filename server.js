const express = require("express");
const path = require("path");
const server = require("../data/routing/apiRoutes")

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);


app.listen(PORT, function(){
    console.log(`Server is listening on: http://localhost:${PORT}`);
})



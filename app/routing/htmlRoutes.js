const express = require("express");
const path = require('path');

const app = express();

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'public/home.html'));
});
  
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'public/survey.html'));
  });
  
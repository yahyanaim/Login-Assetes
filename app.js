const express = require('express');
const app = express();


// requiring routes file
const v1 = require('./src/api/routes/v1/');

// using routes fill (when sameone goes to the path /blabla/ it will load everithing in v1 routers )
app.use("/v1/", v1);


module.exports = app;

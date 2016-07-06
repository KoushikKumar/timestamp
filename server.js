'use strict';

var express = require("express"),
    routes = require(process.cwd()+"/app/routes/index.js");
    
var port = Number(process.env.port || 8080);

var app = express();
app.use('/public',express.static(process.cwd()+'/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

app.listen(port,function(){
  console.log('listening to '+port);
})
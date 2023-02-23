var express = require('express');
var app = express();
var port=process.env.port || 3030
app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(port,()=>{console.log('Example on port ${port}')});
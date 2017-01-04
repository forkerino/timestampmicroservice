const express = require('express');

let app = express();

app.get('/', function(req, res){
     
});

app.listen(8080, function(){
    console.log("listening on port 8080");
})
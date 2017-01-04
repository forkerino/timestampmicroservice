'use strict';

const express = require('express');
const moment = require('moment');

let app = express();

app.get('/:date', function(req, res){
    let date = String(req.params.date);
    if (moment(date, 'MMMM D, YYYY', true).isValid()){
        res.end(JSON.stringify({ 'unix': moment(date).valueOf(), 'natural': date}));
    } else if (moment(date, 'x', true).isValid()) { 
        res.end(JSON.stringify({ 'unix': date, 'natural': moment(date, 'x').format('MMMM D, YYYY')}));
    } else {
        res.end(JSON.stringify({ 'unix': null, 'natural': null}));
    }
});

app.listen(8080, function(){
    console.log("listening on port 8080");
});
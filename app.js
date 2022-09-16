const http = require('http');
const express = require('express');
// const fs = require('fs');
const bodyParser = require('body-parser');
const port = 3000;
const hostname = '127.0.0.1';
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
var items = ["Type Your First Task"];
app.get('/',function(req,res){
    var today = new Date();
    // var currDay = today.getDay();
    var day="";
    var options = {
        weekday:'long',
        day:'numeric',
        month:'long'
    };
    day = today.toLocaleDateString("en-US",options)
    res.render('list', {kindOfDay: day,newListItems: items});
});

app.post('/',function(req,res){
    var item = req.body.task;
    items.push(item);
    // console.log(item);
    res.redirect("/");
});

app.listen(port,hostname,function(){
    console.log(`Server Started At http://${hostname}:${port}/:`);
})

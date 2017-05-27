var express = require("express");
var app = express();
var request = require("request");


app.get("/",function(req,res){
   res.render("search"); 
});


app.get("/results",function(req,res){
    var query = req.query.search;
   request("http://omdbapi.com/?s=" + query , function(error, response, body){
       if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        res.render("results.ejs", {data:data});
        }
   });
});



app.listen(process.env.POST,process.env.IP,function(){
   console.log("Movie App has started"); 
});
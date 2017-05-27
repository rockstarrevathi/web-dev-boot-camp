var express = require("express");
var app = express();


// "/" ==> "Hai Revathi"
app.get("/" , function(req,res){
   res.send("Hai Revathi"); 
});

// "/bye" ==> "Goodbye"
app.get("/bye", function(req,res){
   res.send("Goodbye"); 
});

// "/dog" ==> "Bow Bow Bow Bow"
app.get("/dog", function(req,res){
   res.send("Bow Bow Bow Bow"); 
});


app.get("*",function(req, res) {
   res.send("There is no page"); 
});

//Tell Express to listen for requests(start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!!");
});
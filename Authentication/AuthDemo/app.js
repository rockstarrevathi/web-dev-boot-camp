var express = require("express");
var app= express();
var mongoose = require("mongoose");
var bodyParser =require("body-parser");
var passport = require("passport");
var localStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user.js");

mongoose.connect("mongodb://localhost/auth_demo_app");

app.set("view engine","ejs");
app.use(require("express-session")({
    secret: "Srivalli is my best friend",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
app.use(bodyParser.urlencoded({extended: true}));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//===================================
//           ROUTES
//===================================

app.get("/",function(req,res){
   res.render("home.ejs"); 
});

app.get("/secret",isLoggedIn ,function(req,res){
   res.render("secret.ejs"); 
});
//========================
//Auth Routes
//========================
//show signup form
app.get("/register", function(req,res){
   res.render("register.ejs"); 
});

//Handling user sign up
app.post("/register",function(req,res){
    req.body.username
    req.body.password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
       if(err){
           console.log(err);
           return res.render("register.ejs");
       } 
       passport.authenticate("local")(req,res,function(){
          res.redirect("/secret");
       });
    });
    
});

//===============
//Login Routes
//===============
//render login form 
app.get("/login", function(req,res){
   res.render("login"); 
});
//login logic
//middleware
app.post("/login",passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}),function(req,res){
    
});

//=================
//Logout
//=================
app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server started");
});
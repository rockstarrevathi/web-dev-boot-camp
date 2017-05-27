var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
   name:String,
   age: Number,
   temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to database

// var janaki = new Cat({
//   name:"Rowdy",
//   age:25,
//   temperament: "Evil"
// });

// janaki.save(function(err,cat){
//     if(err){
//         console.log("Something went wrong");
//     }else{
//         console.log("we just saved a cat to the Database");
//         console.log(cat);
//     }
// });

//adding a new cat to database
Cat.create({
   name:"Snow white",
   age:15,
   temperament: "Bland"
}, function(err,cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
});


//retrieve all cats from the DB and console.log each cat
Cat.find({},function(err,cats){
   if(err){
       console.log("Oh,no error");
       console.log(err);
   } else{
       console.log("All the cats");
       console.log(cats);
   }
});

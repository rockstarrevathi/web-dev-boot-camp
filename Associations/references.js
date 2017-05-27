var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post.js");

var User = require("./models/user.js")


// User.create({
//   email: "kittu@gmail.com",
//   name: "Krishna Bandaru"
// });

Post.create({
  title:"How to cook the best burger ------ part 4",
  content: "hhhsgscjsgvjavhjvjhjguygbjhgugugujhhhhhhhhhhhhhiiiiiiiiii"
}, function(err, post){

    User.findOne({email:"kittu@gmail.com"},function(err,foundUser){
      if(err){
            console.log(err);           
      } else{
          foundUser.posts.push(post);
          foundUser.save(function(err,data){
              if(err){
                  console.log(err);
              } else{
                  console.log(data);
              }
          });
      }
    });
});

//find User
//find all posts for that user

// User.findOne({email:"kittu@gmail.com"}). populate("posts").exec(function(err,user){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(user);
//   }
// });
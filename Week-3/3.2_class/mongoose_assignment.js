const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "mongodb+srv://admin:58vmMdNDnBGO5Q5x@cluster0.il8wjfo.mongodb.net/",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

//creating the user
function create(req,res,next){

  const newUser = new User({

    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  
  })

  newUser.save();
  next();
}


app.post("/signup", create, function(req,res){
  res.json({
    'msg': "User Created"
  })
})



function userExists(username, password) {
  // should check in the database
 const user = User.find({username: username, password: password})
 if(user){
  return true; 
 } else{
  return false
 }

}


app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});




app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    // return a list of users other than this username from the database
    const users = await User.find({username:{$ne: username}})
    res.send(users);

  } catch (err) {
    console.log(err)
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(5000);
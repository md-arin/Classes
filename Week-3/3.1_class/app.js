const express = require("express");

const app = express();
app.use(express.json());

function usernameValidator(req, res, next){
  const username = req.query.username;
  const password = req.query.password;
  
  if (username != "harkirat" || password != "pass") {
    res.status(403).json({"msg": "invalid input"})
  }
  else{
    next();
  }
}

function kidneyValidator(req,res, next){
  const kidneyId = req.query.kidneyId;

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({"msg": "Invalid inputs"})  
  }
  else{
    next();
  }
}

//calculate number of request

let numberOfRequest = 0;
function calculateRequest(req,res,next){
  numberOfRequest++;
  console.log("Total request on the server: "+numberOfRequest);
  next();
}

app.use(calculateRequest);

//calculating avergae time server is taking to calculate request
const start = new Date().getTime();
let avgTime = 0;

function averageTimeCalculator(req,res,next){
  const end = new Date().getTime() - start;
  avgTime += end;
  console.log("Average time taken to calculate request: "+avgTime);
  next();
}
app.use(averageTimeCalculator);

app.get("/health-checkup", usernameValidator, kidneyValidator, function (req, res) {
  res.send("Your heart is healthy")

});

app.get("/kidney-checkup", kidneyValidator, function(req,res){
  res.send("YOur kidneys are fine")
})

app.listen(3000);
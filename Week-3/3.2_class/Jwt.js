const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();


const value = {
    name: "Md Arin Alam",
    userid: 23453,
    gender: 'male'
}

const token = jwt.sign(value, "myPassword");


app.get("/", function(req,res){
    res.json({
        "token": token
    })
})

app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000");
})
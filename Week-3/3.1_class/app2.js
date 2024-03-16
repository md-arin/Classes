const express = require('express');

const app = express();

app.post("/health-checkup", function (req,res){
    const kidneys = req.body.kidneys;
    const kidneylength = kidneys.length;

    res.send("your kidney length is " + kidneylength)
});

app.listen(3000);
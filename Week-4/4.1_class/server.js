const express = require ('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/calculatesum", function(req,res){
    const a = req.query.a;
    const b = req.query.b;

    function sum (a,b){
       let ans = parseInt(a) + parseInt(b);
       return ans;
    }
  res.json({
    "sum": sum(a,b)
  })
})

app.get("/interest", function(req,res){
    const p = req.query.p;
    const t = req.query.t;
    const r = req.query.r;

    function interest(p,t,r){
        let ans = (parseInt(p) * parseInt(t) * parseInt(r)) / 100;
        return ans;
    }
    res.json({
        'interest': interest(p,t,r)
    })

})


app.listen(5000);

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

mongoose.
    connect(
        "mongodb+srv://vigneshwaran:karpagam123@cluster0.n1q0j.mongodb.net/Student?retryWrites=true&w=majority"
        )
        .then(()=>{
            console.log("connected to database successfully");
        })
        .catch(()=>{
            console.log("Database Connection Failed!!!")
        })

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})

app.post("/api/SaveUser",function(req,res){
    var mod = new module(req.body);
    const person = new Student({
        name: req.body.name,
        department: req.body.department,
        batch: req.body.batch,
      });
    if(req.body.mode =="Save"){
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been Inserted!!!.."})
            }
        });
    }
    else{
        modal.findByIdAndUpdate(req.body.id,{name:req.body.name,department:req.body.department},
            function(err,data){
                if(err){
                    req.send(err);
                }
                else{
                    res.send({data:"Record has been Updated!!!.."})
                }
            });
    }
})
app.post("/api/deleteUser",function(req,res){
    modal.remove({_id : req.body.id },function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data : "Record has been Deleted..!!"})
        }
    });
})

app.get("/api/getUser",function(req,res){
    modal.find({},function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
})

app.listen(8080,function(){
    console.log('Example app listening on port 8080');
})
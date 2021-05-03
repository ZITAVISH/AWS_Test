const express=require('express');
const app=express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
console.log(req.ip);
res.render('hello_world',{"title":"Rounak","message":"Rendering from AWS"});
});

app.listen(8080,()=>{
    console.log("Node server up at port 8080");
});
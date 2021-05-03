const express=require('express');
const app=express();

app.set('view engine','pug');

app.get('/hello',(req,res)=>{
console.log(req.ip);
res.render('hello_world',{"title":"Rounak","message":"message"});
});

app.listen(8080,()=>{
    console.log("Node server up at port 8080");
});
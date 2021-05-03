const express=require('express');
const app=express();

app.set('view engine','pug');

app.get('/',(req,res)=>{
console.log(req.ip);
res.send('hello_world');
});

app.listen(8080,()=>{
    console.log("Node server up at port 8080");
});
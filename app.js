const express  =  require('express');
const app =  express();
const path  = require('path');

app.use('/',(req,res)=>{
    res.send('<h1>omji</h1>')

})
app.listen(3000,()=>{
    console.log("connected");

})
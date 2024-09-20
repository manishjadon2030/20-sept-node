const express = require('express')
const path = require('path')
const connect = require("./connection")
const router = require('./routes/student')
const app = express()
const Port = 3000
connect()

app.use(router)








// use for rendering html  and ejs is a engine(ejs used for website not for app)
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.listen(Port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on ",Port)
    }
})
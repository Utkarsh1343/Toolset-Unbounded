const express = require("express");
const path = require("path");
const fs = require("fs");
const app= express();
const port = 3000;

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'static'))

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})
app.get('/register',(req,res)=>{
    res.status(201).render('register.pug');
})
// app.post('/register',(req,res)=>{
//   var data= new info(req.body);

//       data.save().then(()=>{
       
//         res.status(404).send("item was saved")
//       }).catch(()=>{
//         res.status(404).send("item was not sent")
//       })

// })
app.get('/login',(req,res)=>{
    res.status(202).render('login.pug');
})

app.listen(port, ()=>{
    console.log(`app started successfully on port ${port}`);
});
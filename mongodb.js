
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/info')
.then(()=>{
  console.log("Database connected");
})
.catch(()=>{
    console.log("failedd to connect")
})
mongoose.connection.on('error', err => { console.log(err); });
const regschema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    cpassword: String
  });

  const info = mongoose.model('info', regschema);

  module.exports=info
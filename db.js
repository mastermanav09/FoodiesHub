const mongoose = require('mongoose');

var URL = "mongodb+srv://Ashish_9810:Mahajan600@cluster0.8xpax.mongodb.net/mern-food";
mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});

var db = mongoose.connection;
db.on('connected',()=>console.log('DataBase connected'));
db.on('error',()=>console.log('Not connected'));

module.export = mongoose;
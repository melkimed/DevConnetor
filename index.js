
const express = require('express');

const mongoose = require("mongoose");

const bodyParser =require('body-parser');

const users  = require("./routes/api/users") ;

const posts = require("./routes/api/posts");

const profile = require("./routes/api/profile") ;
const { urlencoded } = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//db configs


//connect to mongodb

mongoose.connect("mongodb+srv://melki-medd:melkimed123@cluster0.s3nii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{ useNewUrlParser: true })
  .then(() => console.log('mongo connect'))
  .catch(err => console.log(err));

app.get ('/', (req,res) => res.send("hello !"));

app.use('/api/users',users);

app.use('/api/posts',posts);

app.use('/api/profile',profile);

const port = process.env.PORT || 5000  ;

app.listen(port ,() => console.log("server running port 5000"));
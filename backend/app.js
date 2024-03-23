const dotenv = require("dotenv")

const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');
const app = express();

dotenv.config({path:'./config.env'});


require('./db/connect')
// const MMIL = require('./models/FormData');

app.use(cors());

app.use(express.json())

app.use(require('./routes/formRoutes'));



const PORT = process.env.PORT;


//Middleware

const middleware =(req,res,next)=>{
    console.log('hello my middleware')
    next();
}

// middleware()

// app.get('/',  (req,res) =>{
//     res.send(`Helllo world from the server`);

// });

app.get('/about',(req,res)=>{
    res.send(`hello about world from the server`)
})


app.listen(PORT,()=>{
    console.log(`server is running at port no 5000`)
})
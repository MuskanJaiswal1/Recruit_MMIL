const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');



dotenv.config({path:'./config.env'});


require('./db/connect')
// const MMIL = require('./models/FormData');

app.use(cors());

app.use(express.json())

app.use(require('./routes/formRoutes'));

app.use(bodyParser.json());



const PORT = process.env.PORT;


//Middleware


const middleware =(req,res,next)=>{
    console.log('hello my middleware')
    next();
}

// middleware()


app.get('/about',  (req,res) =>{
    res.send(`Helllo world from the server`);

});



// app.get('/',(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,"frontend","build")));
//     res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
// })
// app.get("/",(req,res)=>{
//     app.use(express.static(path.resolve(__dirname,"frontend","build")));
//     res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
// })

app.listen(PORT,()=>{
    console.log(`server is running at port no 5000`)
})
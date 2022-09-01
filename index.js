'use strict';
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const {greetRouter} = require('./routes')

const app = express();
const port = process.env.PORT || 7727;


// middleware 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//using routing
app.use(greetRouter)



//starting of srever

app.listen(port, ()=>{
    console.log("Server statred at ",port)
})






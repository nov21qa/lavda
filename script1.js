'use strict';

const http = require('http');
const express =require('express');
const app = express();

app.get("/",(request,response)=>
{
    response.status(200).end("welcome");
})


app.listen(2000,()=>
{
    console.log("server is listening!");
})
const express = require("express");
require('dotenv').config();
//import express from "express"
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login",(req,res)=>{
    res.send('<h1>Login request</h1>')
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

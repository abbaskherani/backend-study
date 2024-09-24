// dotenv for protecting the port
// and for using the environment variables
// also for using the .env file
// and for prtecting the sensitive information
const express = require("express");
require("dotenv").config();
const app = express();


//65430 total ports
app.get("/", (req, res) => {
  res.send("Hello World");
});


app.get('/twitter', (req,res)=> {
    res.send("abbas.dom")
})


app.get('/login', (req,res)=> {
    res.send('<h1>Please login at chai aur backend</h1>');
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>youtube</h2>')
})
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
// ------------------
// Setup - Importing dependencies 
// ------------------
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// ------------------
// MIDDLEWARE!!!!
// ------------------






// ------------------
// Declare routes and routers
// ------------------

// Greeting section
app.get('/greeting/:name', (req, res) =>{
  res.send(`Hello, Bob...wait a minute, you're not Bob! You're ${req.params.name}!`)
})


// Tip Calculator Section
app.get('/tip/:total/:percentage', (req, res) => {
  let percentage = parseInt(req.params.percentage) / 100;
  let tip = parseFloat(parseInt(req.params.total) * percentage).toFixed(2);
  res.send(`Your tip should be $${tip}`)
})




// ------------------
// Server listener
// ------------------

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
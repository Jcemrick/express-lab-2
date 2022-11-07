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
app.get('/greeting/:name', (req, res) =>{
  res.send(`Hello, Bob...wait a minute, you're not Bob! You're ${req.params.name}!`)
})




// ------------------
// Server listener
// ------------------

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
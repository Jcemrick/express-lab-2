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
app.get('/', (req, res) => {
  res.send(`<p>99 bottles of beer on the wall...</p><a href="/98">take one down pass it around..</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
  // JS if statement for number of bottles
    if (req.params.number_of_bottles > 1) {
      res.send(`<p>${req.params.number_of_bottles} bottles of beer on the wall.</p><a href="/${req.params.number_of_bottles-1}">take one down pass it around...</a>`);

    } else if (req.params.number_of_bottles > 0) {
      res.send(`<p>${req.params.number_of_bottles} bottles of beer on the wall.</p><a href="/${req.params.number_of_bottles-1}">take one down pass it around...</a>`);

    } else {
      res.send(`<p>No more bottles of beer on the wall!</p><a href="/">Reset to the beginning?</a>`);
    }
  
})

// ------------------
// Server listener
// ------------------

app.listen(PORT, () => {
  console.log(`Server os listening on port ${PORT}`)
});
// ------------------
// Setup - Importing dependencies 
// ------------------
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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
app.get('/tip/:total/:tipPercentage', (req, res) => {
  let percentage = parseInt(req.params.tipPercentage) / 100;
  let tip = parseFloat(parseInt(req.params.total) * percentage).toFixed(2);
  res.send(`Your tip should be $${tip}`);
})


// Magic 8 Ball
app.get('/magic/:question', (req, res) => {
  const random = Math.floor(Math.random() * eightBall.length)
  res.send(`<h1>Magic 8 Ball</h1> <p>Question: ${req.params.question}</p> <p>Answer: ${eightBall[random]}...</p>`)
})





// ------------------
// Server listener
// ------------------

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
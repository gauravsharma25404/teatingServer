require('dotenv').config()
const express = require('express')

const app = express()

const port = 5000

app.get('/', (req, res) => {
    res.send("<h2>this is the home page of website</h2>");
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login first</h1>")
})

app.get('/register', (req, res) => {
    res.send("<h1>Please Register First</h1>")
})

app.get('/main', (req, res) =>{
    res.send("<h1>it is the main page of the website</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`test server is listening on ${process.env.PORT}`);
})
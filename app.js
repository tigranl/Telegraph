const express = require('express')
const mongoose = require('mongoose')
const parser = require('body-parser')

const app = express();
port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/app')

app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(express.static("public"))

require('./app/views')(app)
app.listen(port)
console.log('Server is on at http://localhost:' + port)

const express = require('express')
const app = express()
const router = require('./routes')
const session = require('express-session')
const PORT = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`=====================================`);    
    console.log(`App running on PORT : ${PORT}`);    
    console.log(`=====================================`);  
})
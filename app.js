const express = require('express')
const app = express()
const router = require('./routes')
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true}))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`=====================================`);    
    console.log(`App running on PORT : ${PORT}`);    
    console.log(`=====================================`);  
})
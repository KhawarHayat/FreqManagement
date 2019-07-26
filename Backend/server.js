const express = require('express');
const bodyParser= require('body-parser')
const cors = require('cors')
const app = express()

//enable CORS
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const route = require('./Route/route.js')

 app.use('/',route)


app.listen(4000, () => {
  console.log('Server started')
})
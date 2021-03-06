const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('./Routes/indexRoutes'))
app.use(cors());

app.listen(1000,(req, res) => {
    console.log('listening on port 1000')
} )
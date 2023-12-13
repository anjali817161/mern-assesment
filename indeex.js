const express = require('express')
const cors = require('cors')
const db = require('./config/mongoose')
const PORT = 8000
const app = express()
const routes = require('./routes')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())


app.use('/', routes)



app.listen(PORT, () => {
    console.log("Server started successfully!")
})
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors({
    credentials: true 
 }))

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
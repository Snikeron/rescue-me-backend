const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const petsRouter = require('./pets/petsRouter')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/pets', petsRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
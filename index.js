const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const petsRouter = require('./pets/petsRouter')
const authRouter = require('./auth/authRouter')

const app = express()

app.use(bodyParser.json())
app.use(cors())

const corsOptions = {
    exposedHeaders: "Authorization",
    // withCredentials: true
}
app.use(cors(corsOptions))

app.use('/pets', petsRouter)
app.use('/auth', authRouter)

// universal error:
app.use((err, req, res, next) => {
    res.json({error: err.message})
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const petsRouter = require('./pets/petsRouter')
const authRouter = require('./auth/authRouter')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())

const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true
}
app.use(cors(corsOptions))

app.use('/pets', petsRouter)
app.use('/auth', authRouter)
app.get('/', (req, res) => {
    console.log(`Cookies: ${req.cookies}`)
    console.log(`Signed Cookies: ${req.signedCookies}`)
})

// universal error:
app.use((err, req, res, next) => {
    res.json({error: err.message})
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
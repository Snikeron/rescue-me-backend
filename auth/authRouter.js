const express = require('express')
const JWT = require('jsonwebtoken')
const User = require('../users/User')
const Cookies = require('cookies')

const router = express.Router()

router.post('/login', (req, res) => {

    const {email, password} = req.body 

    User.isAuthenticUser(email, password)
    .then(auth => {
        // console.log(auth)
        if(auth) {
            const [,,,ip_address] = req.ip.split(":")

            const payload = {
                email,
                ip_address
            }

            const jwtSecret = process.env.JWT_SECRET
            
            const header = JWT.sign(payload, jwtSecret, (err, token) => {
                if(err) {
                    res.status(401)
                    throw new Error('Bad token')
                }

                // res.set('Authorization', `Bearer ${token}`)
                // add cookie to response
                const cookies = new Cookies(req, res)
                cookies.set('access_token', token, {
                    secure: false,
                    httpOnly: true
                })
                // console.log(cookies)

                res.status(200).json({
                    message: 'you logged in',
                }) 
            })
        
            return header;    

        } else {
            res.status(500)
            throw new Error(`Authentication failed`)    
        }
        
    })
    .catch(err => {
        res.status(500)
        console.error(err.message)
    })

})

router.post('/register', (req, res) => {
    const { email, password } = req.body

    User.register(email, password)
    .then(user => {
        // TODO: creates a valid cookie
        const cookies = new Cookies(req, res)
        cookies.set('access_token', token, {
            secure: false,
            httpOnly: true
        })

        res.status(200).json(user)
    })
    .catch(err => {
        res.status(500)
        throw new Error(err.message)
    })

})


module.exports = router
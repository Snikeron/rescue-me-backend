const auth = require('./util')
const { Bearer } = require('permit')
const JWT = require('jsonwebtoken')


const permit = new Bearer({
    query: 'access_token'
})

// function authenticate(req, res, next) {
//     const {email, password} = req.body
//     const authed = User.isAuthenticUser(email, password)

//     if(!authed) {
//         permit.fail(res)
//         throw new Error('Incorrect email or password')
//     }
//     next()
// }

function authorize(req, res, next) {
    const token = permit.check(req)
    const jwtSecret = process.env.JWT_SECRET
    JWT.verify(token, jwtSecret, (err, payload) => {
        if(err){
            permit.fail(res)
            throw new Error('Not authorized')
        }
        next()
    })
}

module.exports = {
    authenticate,
    authorize
}
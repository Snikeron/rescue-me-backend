const mongoose = require('mongoose')

const url = 'mongodb+srv://rescue-me-yl59r.mongodb.net/'
const options = {
    user: 'defaultuser',
    pass: process.env.MONGODB_USER_PASSWORD,
    dbName: 'rescue-me',
    promiseLibrary: global.Promise
}

mongoose.connect(url, options)
    .then(() => {
        console.info(
            'mongodb db connection established'
        )
    })
    .catch(err => {
        console.error(
            `mongodb db failure: ${err.message}`
        )
    })

module.exports = mongoose
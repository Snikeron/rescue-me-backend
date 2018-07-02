const express = require('express')
const router = express.Router()
const Pet = require('./Pet')

router.get('/', (req, res) => {
    Pet.find()
    .then(pets => {
        res.status(200).json(pets)
    })
    .catch(err => {
        throw new Error(err.message)
    })

})

router.get('/:id', (req, res) => {
    Pet.findById(req.params.id)
    .then(pet => {
        console.log(pet)
        res.status(200).json(pet)
    })
    .catch(err => {
        throw new Error(err.message)
    })
})

module.exports = router
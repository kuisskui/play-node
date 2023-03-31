const express = require("express")
const router = express.Router()

router.use('/about', (req, res, next) => {
    console.log("note Router activated!")
    next()
})

router.get('/', (req, res) => {
    res.send("note home page!")
})

router.get("/about", (req, res) => {
    res.send("note about page!")
})

module.exports = router
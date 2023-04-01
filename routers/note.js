const express = require("express")
const router = express.Router()

router.use(function (req, res, next) {
    console.log("note accessed.")
    next()
})

router.get('/', function (req, res) {
    res.send("note home page!")
})

router.get("/about", function (req, res) {
    res.send("note about page!")
})

module.exports = router
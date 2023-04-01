const express = require("express")
const router = express.Router()

router.use(function (req, res, next){
    console.log("auth accessed.")
    next()
})

router.get('/', function (req, res) {
    console.log("authentication app.")
})

router.get("/sign_up", function (req, res) {
    console.log("sige up page.")
})

router.get("/sign_in", function (req, res) {
    console.log("sign in page.")
})

router.get("sign_out", function (req, res) {
    console.log("sign out page.")
})

module.exports = router
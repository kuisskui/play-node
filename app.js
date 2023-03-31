const express = require("express")
const app = express()
const port = 3000

const note = require("./routers/note")

app.use("/static", express.static('public'))

app.use("/note", note)

app.use(function (req, res, next) {
    console.log("Status code: " + res.statusCode)
    console.error("Status code: " + res.statusCode)
    next()
})

app.use(function (req, res, next) {
    console.log("second middleware!")
    next()
})


app.get('/', (req, res) => {
    console.log(res.statusCode)
    res.send({
        text: "Hello Express!",
        http: "https://en.wikipedia.org/wiki/HTTP#Request_methods"
    })
})

app.listen(port, () => {
    console.log(`The app is listening on port ${port}`)
})
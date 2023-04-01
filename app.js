const express = require("express")
const app = express()
const port = 3000

const note = require("./routers/note")

app.set("view engine", "pug")

app.use("/static", express.static('public'))
app.use("/note", note)
app.use("/auth", auth)

app.use(function (req, res, next) {
    console.log("Status code: " + res.statusCode)
    next()
})

app.get('/', function(req, res){
    res.render('index')
})

app.listen(port, function(){
    console.log(`The app is listening on port ${port}`)
})

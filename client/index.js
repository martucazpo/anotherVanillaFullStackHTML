const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + "/public"))
app.use(routes)

app.listen(3000, console.log("On port 3000, the server listens...."))
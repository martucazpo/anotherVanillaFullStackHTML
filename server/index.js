const express = require("express")
const app = express()
const cors = require("cors")
const routes = require("./routes")


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use(routes)

app.listen(8080, ()=>console.log("On a distant port, this server listens...."))
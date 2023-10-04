const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()
const routerUser = require("./Routers/user")
const morgan = require('morgan')


app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('combined'))
app.use(express.static("uploads"))
app.use(cors("*"))
app.use(express.json())
app.use("/user", routerUser)

app.listen(4001, "0.0.0.0", () => 
{
  console.log("Server started at port 4001")
})
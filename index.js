var express = require('express')
const bearerToken = require('express-bearer-token');
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = 1998

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static('public')) 
app.use(cors())
app.use(bodyParser.json())
app.use(bearerToken())

const {userRouter, projectRouter, studentRouter} = require('./router')
app.get('/', (req, res) => {
    res.status(200).send(
        `<h3>Welcome to Kasih Nusantara API</h3>`
    )
})

app.use("/user", userRouter)
app.use('/student',studentRouter)
app.use("/project", projectRouter)

app.listen(port, ()=> console.log(` Api aktif di port  ${port} `))
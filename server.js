const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./src/models/index')
const login = require('./src/models/login')
const loginRouter = require('./src/routers/login.router')
const getRouter = require('./src/routers/get.route')
const authCheck = require('./src/middleware/authenticateToken')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/login", loginRouter)
app.use("/getLogin", authCheck.authenticateToken, getRouter)

// sequelize.sync().then(
//     console.log(sequelize)
// ).catch(error=>console.log(error))

app.listen(8116, () => {
    console.log("Running...")
})
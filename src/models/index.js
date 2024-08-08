const Sequelize = require('sequelize')
const config = require('../config/config')
const mysql = require('mysql')

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql'
})

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log("connection success")
    } catch (err) {
        console.log("error while connecting :", err)
    }
}
checkConnection()
module.exports = sequelize
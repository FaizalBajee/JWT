const jwt = require('jsonwebtoken')
const Login = require('../models/login')
const response = require('../controllers/response.controller')
require('dotenv').config()
async function loginService(user, pass) {
    try {
        const accessToken = jwt.sign(user,process.env.JWT_SECRET)
        const login = await Login.create({
            user: user,
            password: pass
        })
        if (login) return response.success(`uploaded!  token:${accessToken}`, {})
    } catch (error) {
        console.log(`error handling ${error}`)
        return response.fail(`error handling: ${error}`, {})
    }

}
module.exports = { loginService }
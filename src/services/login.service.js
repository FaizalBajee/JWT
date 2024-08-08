const jwt = require('jsonwebtoken')
const Login = require('../models/login')
const response = require('../controllers/response.controller')
async function loginService(user, pass) {
    try {
        const accessToken=jwt.sign(user,"123456")
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
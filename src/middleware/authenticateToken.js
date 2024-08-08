require('dotenv').config()
const jwt = require('jsonwebtoken')
const response = require('../controllers/response.controller')
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.json(response.fail("token not found!"));
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.json(response.fail("error while verify token"));
        req.user = user;
        next()
    })
}
module.exports = { authenticateToken }
const response = require('../controllers/response.controller')
const service = require('../services/login.service')

async function loginController(req, res) {
    try {
        const { user, pass } = req.query;
        // console.log(user,pass)
        if (!user || !pass) return res.json(response.fail("user and password is require"));
        res.json(await service.loginService(user, pass));
    }
    catch (error) {
        console.log("error handling", error);
        res.json(response.fail(`error handling : ${error}`, {}));
    }
}
module.exports = { loginController };

const response = require('../controllers/response.controller')
const service = require('../services/get.service')
async function getController(req, res) {
    try {
        console.log(req.user)
        res.json(await service.getService())
    } catch (error) {
        console.log("error handling:", error);
        res.json(response.fail(`error handling : ${error}`, {}))
    }
}
module.exports = { getController }
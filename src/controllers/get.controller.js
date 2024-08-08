const response = require('../controllers/response.controller')
const service = require('../services/get.service')
async function getController(req, res) {
    try {
        res.json(await service.getService(req.user))
    } catch (error) {
        console.log("error handling:", error);
        res.json(response.fail(`error handling : ${error}`, {}))
    }
}
module.exports = { getController }
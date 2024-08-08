const response = require('../controllers/response.controller');
const login = require('../models/login');

async function getService(user) {
    try {
        const getLogin = await login.findAll();
        if (getLogin.length === 0) {
            return response.fail("Data not found", {});
        }
        const data = getLogin.filter(item => item.user === user)
        return response.success(`Data exists`, data);

    } catch (error) {
        console.error("Error fetching data:", error);
        return response.fail("An error occurred while fetching data", {});
    }
}
module.exports = { getService };

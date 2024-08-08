const response = require('../controllers/response.controller');
const login = require('../models/login');

async function getService() {
    try {
        const getLogin = await login.findAll(); 
        if (getLogin.length === 0) {
            return response.fail("Data not found", {});
        }
        const data = getLogin.map(item => ({
            user: item.user,
            password: item.password
        }))
        return response.success(`Data exists`, data);

    } catch (error) {
        console.error("Error fetching data:", error);
        return response.fail("An error occurred while fetching data", {});
    }
}
module.exports = { getService };

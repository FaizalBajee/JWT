const Sequelize = require('./index'); 
const DataTypes = require('sequelize'); 

const login = Sequelize.define('login', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false 
    }
}, {
    timestamps: true
});

module.exports = login;

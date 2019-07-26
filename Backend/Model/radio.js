const connect = require('../config')
const Sequelize = require('sequelize')
var Radio = connect.define('radio', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	model: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    freq: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    antenna: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    comMode: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    deployment: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    data: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    userID : {
		type: Sequelize.INTEGER,
		

    },

}, {
		timestamps: true
	});

connect.sync().then(function () {
	
console.log("Radio Table Created!")
})
 
module.exports = Radio
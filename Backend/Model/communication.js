const connect = require('../config')
const Sequelize = require('sequelize')
var Communication = connect.define('communication', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	band: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    channel: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    freq: {
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
	
console.log("Communication Table Created!")
})
 
module.exports = Communication
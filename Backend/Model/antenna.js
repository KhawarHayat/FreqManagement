const connect = require('../config')
const Sequelize = require('sequelize')
var Antenna = connect.define('antenna', {
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
    number: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    power: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    AEG : {
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
	
console.log("Antenna Table Created!")
})
 
module.exports = Antenna
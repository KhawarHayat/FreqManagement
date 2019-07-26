const connect = require('../config')
const Sequelize = require('sequelize')
var Network = connect.define('network', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	networkschemes: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    networkpriority: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    netType: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    service: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    comMode: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    radio: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    antenna: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    deployment: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    latitude: {
		type: Sequelize.TEXT,

		len: [2, 50],
		

    },
    longitude: {
		type: Sequelize.TEXT,

		len: [2, 50],

    },
    area: {
		type: Sequelize.TEXT,

		len: [2, 50],
		

    },
    userID : {
		type: Sequelize.INTEGER,
		

    },

}, {
		timestamps: true
	});

connect.sync().then(function () {
	
console.log("Network Table Created!")
})
 
module.exports = Network
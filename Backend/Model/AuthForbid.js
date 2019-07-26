const connect = require('../config')
const Sequelize = require('sequelize')
var AuthForbid = connect.define('authforbid', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	authFrom: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    authTo: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    forbidFrom: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    forbidTo: {
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
	
console.log("AuthForbid Table Created!")
})
 
module.exports = AuthForbid

 const connect = require('../config')
const Sequelize = require('sequelize')
const bcrypt = require('bcryptjs')
var User = connect.define('users', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

    },
    rank: {
		type: Sequelize.TEXT,

		len: [2, 50],
		allowNull: false

	},
	PAno: {
		type: Sequelize.STRING,
		len: [2, 10],
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		len: [5, 50],
		allowNull: false,
		unique: true,
	},
	//password_hash: DataTypes.STRING

	password: {

		type: Sequelize.STRING,
		allowNull: false,

	},
	cnic: {

		type: Sequelize.STRING,
		allowNull: false,
		unique: true

	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	}

}, {
		timestamps: true
	});

connect.sync().then(function () {
	
console.log("User Table Created!")
})

User.encryptPassword = (password, callback) => {
    bcrypt.genSalt(10, function(err, pakarmy) {
        bcrypt.hash(password, pakarmy, function(err, hash) {
            callback(err, hash)
        });
    });
}

User.comparePassword = (password, hash, callback) => {
    bcrypt.compare(password, hash, function(err, res) {
        if(err){
            console.log(err)
        }
        else{
            callback(null, res)
        }
    });
}


module.exports = User

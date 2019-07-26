const Sequelize = require('sequelize')
const connection = new Sequelize('my-db','root','M.K876bhatti',{dialect: 'mysql', logging: false});
module.exports = connection
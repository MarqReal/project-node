// Conexao com o banco de dados mysql
const Sequelize = require('sequelize');

//Conexao com o BD Mysql
const sequelize = new Sequelize('nodejs', 'nodejs', 'nodejs', {
  host:"localhost",
  dialect: "mysql"
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}

const SEQUELIZE = require('sequelize')
require('dotenv').config()

const BD = process.env
const CONN = new SEQUELIZE(
    BD.MYSQL_DB,
    BD.MYSQL_USER,
    BD.MYSQL_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = CONN
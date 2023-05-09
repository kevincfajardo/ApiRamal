const SEQUELIZE = require('sequelize')
const CONN = require('./bd_conn')

const categorias = CONN.define('categorias', {
    id: {
        type: SEQUELIZE.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }, 
    nome: {
        type: SEQUELIZE.STRING(100),
        allowNull: false,
        unique: true,
    },
    permissao: {
        type: SEQUELIZE.STRING(100),
        allowNull: false
    },
    perm_habilitada: {
        type: SEQUELIZE.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
})

// categorias.sync()
// categorias.sync({ alter: true })

module.exports = categorias
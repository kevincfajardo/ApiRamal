const SEQUELIZE = require('sequelize')
const CONN = require('./bd_conn')
const CATEGORIAS = require('./categorias')

const ramais = CONN.define('ramais', {
    id: {
        type: SEQUELIZE.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    telefone: {
        type: SEQUELIZE.STRING(14),
        allowNull: false,
    },
    nome: {
        type: SEQUELIZE.STRING(100),
        allowNull: false,
    },
    id_categoria: {
        type: SEQUELIZE.INTEGER,
        allowNull: false,
        references: {
            model: CATEGORIAS,
            key: 'id'
        }
    }
})

// ramais.sync()
// ramais.sync({ alter: true })

module.exports = ramais
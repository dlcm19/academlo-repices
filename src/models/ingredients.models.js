const {DataTypes, UUID} = require('sequelize')
const Types = require('./types.models')
const db = require('../utils/database')

const Ingredients = db.define('ingredients', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    urlImg: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }

    },
    typeId: {
        type: DataTypes.INTEGER,
        all: false,
        field: 'type_id',
        references: {
            key: 'id',
            model: Types
        }
    },
 
})

module.exports = Ingredients
const {DataTepes, DataTypes} = require('sequelize')
const db = require('../utils/database')
const Recipes = require('./recipes.models')
const Ingredients = require('./ingredients.models')
const { Field } = require('pg-protocol/dist/messages')

const RecipesIngredients = db.define('recipes_ingredients', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recipeId:{
      type:DataTypes.UUID,
      allowNull:false,
      Field: 'recipe_id',
      references:{
            key:'id',
            model: Recipes
      }
    },
    ingredientId:{
        type:DataTypes.UUID,
        allowNull:false,
        Field: 'ingredient_id',
        references:{
            key:'id',
            model: Ingredients
        }

    }
})

module.exports = RecipesIngredients
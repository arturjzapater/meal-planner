import Action from '../types/Action'
import Ingredient from '../types/Ingredient'

const addIngredient = (ingredient: string): Action => ({
  type: 'ADD_INGREDIENT',
  payload: {
    ingredient
  }
})

const changeTitle = (title: string): Action => ({
  type: 'CHANGE_TITLE',
  payload: {
    title
  }
})

const newMeal = (day: string, meal: string, dish: string, ingredients: Array<Ingredient>): Action => ({
  type: 'NEW_MEAL',
  payload: {
    day,
    meal,
    dish,
    ingredients
  }
})

const removeMeal = (day: string, meal: string): Action => ({
  type: 'REMOVE_MEAL',
  payload: {
    day,
    meal
  }
})

const removeIngredient = (ingredient: string): Action => ({
  type: 'REMOVE_INGREDIENT',
  payload: {
    ingredient
  }
})

const reset = (): Action => ({
  type: 'RESET'
})

export default {
  addIngredient,
  changeTitle,
  newMeal,
  removeMeal,
  removeIngredient,
  reset
}

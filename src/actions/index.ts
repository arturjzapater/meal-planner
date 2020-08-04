import Action from '../types/Action'

const addIngredient = (ingredient: string): Action => ({
  type: 'ADD_INGREDIENT',
  payload: {
    ingredient
  }
})

const addMeal = (day: string, meal: string, dish: string): Action => ({
  type: 'ADD_MEAL',
  payload: {
    day,
    meal,
    dish
  }
})

export default {
  addIngredient,
  addMeal
}

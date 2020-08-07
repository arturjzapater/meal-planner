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

const changeNew = (prop: string, value: string): Action => ({
  type: 'CHANGE_NEW',
  payload: {
    prop,
    value
  }
})

const newMeal = (): Action => ({
  type: 'NEW_MEAL'
})

const removeMeal = (day: string, meal: string): Action => ({
  type: 'REMOVE_MEAL',
  payload: {
    day,
    meal
  }
})

const reset = (): Action => ({
  type: 'RESET'
})

export default {
  addIngredient,
  addMeal,
  changeNew,
  newMeal,
  removeMeal,
  reset
}

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

const changeTitle = (title: string): Action => ({
  type: 'CHANGE_TITLE',
  payload: {
    title
  }
})

const newMeal = (day: string, meal: string, dish: string): Action => ({
  type: 'NEW_MEAL',
  payload: {
    day,
    meal,
    dish
  }
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
  changeTitle,
  newMeal,
  removeMeal,
  reset
}

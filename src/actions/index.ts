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

const changeNew = (prop: string, payload: string): Action => ({
  type: `CHANGE_NEW_${prop.toUpperCase()}`,
  payload
})

export default {
  addIngredient,
  addMeal,
  changeNew
}

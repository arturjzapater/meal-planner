import { Action, State } from '../types'
import Ingredient from '../types/Ingredient'

// const addIngredient = (state: State, { ingredient }: { ingredient: string }): State => ({
//   ...state,
//   ingredients: state.ingredients.concat(ingredient)
// })

// const addMeal = (state: State, { day, meal, dish }: Record<string, string>): State => ({
//   ...state,
//   meals: {
//     ...state.meals,
//     [day]: {
//       ...state.meals[day],
//       [meal]: dish
//     }
//   }
// })

interface NewMeal {
  day: string,
  meal: string,
  dish: string,
  ingredients: Array<Ingredient>
}

const changeTitle = (state: State, { title }: Record<string, string>): State => ({
  ...state,
  title
})

const newMeal = (state: State, { day, meal, dish, ingredients }: NewMeal): State => ({
  ...state,
  meals: {
    ...state.meals,
    [day]: {
      ...state.meals[day],
      [meal]: dish
    }
  },
  ingredients: state.ingredients.concat(ingredients)
})

const removeMeal = (state: State, { day, meal }: Record<string, string>): State => ({
  ...state,
  meals: {
    ...state.meals,
    [day]: {
      ...state.meals[day],
      [meal]: ''
    }
  }
})

const reset = (): State => initState

const def = (state: State): State => state

const actions: Record<string, CallableFunction> = {
  // ADD_INGREDIENT: addIngredient,
  // ADD_MEAL: addMeal,
  CHANGE_TITLE: changeTitle,
  NEW_MEAL: newMeal,
  REMOVE_MEAL: removeMeal,
  RESET: reset,
  default: def
}

const dailyMeals = {
  breakfast: '',
  lunch: '',
  supper: ''
}

const initState: State = {
  meals: {
    monday: { ...dailyMeals },
    tuesday: { ...dailyMeals },
    wednesday: { ...dailyMeals },
    thursday: { ...dailyMeals },
    friday: { ...dailyMeals },
    saturday: { ...dailyMeals },
    sunday: { ...dailyMeals }
  },
  title: 'Meal Schedule',
  ingredients: []
}

const reducer = (state = initState, action: Action): State => {
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}

export default reducer

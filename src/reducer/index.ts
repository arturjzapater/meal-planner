import { Action, State } from '../types'

const addIngredient = (state: State, { ingredient }: { ingredient: string }): State => ({
  ...state,
  ingredients: state.ingredients.concat(ingredient)
})

const addMeal = (state: State, { day, meal, dish }: Record<string, string>): State => ({
  ...state,
  meals: {
    ...state.meals,
    [day]: {
      ...state.meals[day],
      [meal]: dish
    }
  }
})

const def = (state: State): State => state

const actions: Record<string, CallableFunction> = {
  ADD_INGREDIENT: addIngredient,
  ADD_MEAL: addMeal,
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
  ingredients: []
}

const reducer = (state = initState, action: Action): State => {
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}

export default reducer

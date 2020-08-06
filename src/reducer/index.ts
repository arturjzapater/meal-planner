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

const changeNew = (state: State, { prop, value }: Record<string, string>): State => ({
  ...state,
  newMeal: {
    ...state.newMeal,
    [prop]: value
  }
})

const newMeal = (state: State): State => ({
  ...state,
  meals: {
    ...state.meals,
    [state.newMeal.day]: {
      ...state.meals[state.newMeal.day],
      [state.newMeal.meal]: state.newMeal.dish
    }
  },
  newMeal: {
    ...state.newMeal,
    dish: ''
  }
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

const def = (state: State): State => state

const actions: Record<string, CallableFunction> = {
  ADD_INGREDIENT: addIngredient,
  ADD_MEAL: addMeal,
  CHANGE_NEW: changeNew,
  NEW_MEAL: newMeal,
  REMOVE_MEAL: removeMeal,
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
  newMeal: {
    day: 'monday',
    meal: 'breakfast',
    dish: ''
  },
  ingredients: []
}

const reducer = (state = initState, action: Action): State => {
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}

export default reducer

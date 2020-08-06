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

const changeNew = (prop: string) => (state: State, payload: string): State => ({
  ...state,
  new: {
    ...state.new,
    [prop]: payload
  }
})

const def = (state: State): State => state

const actions: Record<string, CallableFunction> = {
  ADD_INGREDIENT: addIngredient,
  ADD_MEAL: addMeal,
  CHANGE_NEW_DAY: changeNew('day'),
  CHANGE_NEW_MEAL: changeNew('meal'),
  CHANGE_NEW_DISH: changeNew('dish'),
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
  new: {
    day: '',
    meal: '',
    dish: ''
  },
  ingredients: []
}

const reducer = (state = initState, action: Action): State => {
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}

export default reducer

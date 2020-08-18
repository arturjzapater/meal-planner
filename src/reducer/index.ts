import { Action, State } from '../types'
import Ingredient from '../types/Ingredient'
import { capitalise, not, pipe, prop, trim } from '../lib/utils'

const addKey = (key: string) => (ingredient: string) => ({ key, ingredient })

const isNot = (property: string, value: string) => pipe(
  prop(property),
  not(value)
)

const makeObj = (key: string) => pipe(
  trim,
  capitalise,
  addKey(key)
)

const parseIngredients = (day: string, meal: string, ingredients: string): Array<Ingredient> =>
  ingredients.length === 0
    ? []
    : ingredients
      .trim()
      .split(/\n|,/)
      .map(makeObj(`${day}-${meal}`))

const addIngredient = (state: State, { ingredient }: Record<string, string>): State => ({
  ...state,
  ingredients: state.ingredients.concat({
    key: 'manually-added',
    ingredient: capitalise(ingredient)
  })
})

const changeTitle = (state: State, { title }: Record<string, string>): State => ({
  ...state,
  title
})

const newMeal = (state: State, { day, meal, dish, ingredients }: Record<string, string>): State => ({
  ...state,
  meals: {
    ...state.meals,
    [day]: {
      ...state.meals[day],
      [meal]: dish
    }
  },
  ingredients: state.ingredients
    .filter(isNot('key', `${day}-${meal}`))
    .concat(parseIngredients(day, meal, ingredients))
})

const removeMeal = (state: State, { day, meal }: Record<string, string>): State => ({
  ...state,
  meals: {
    ...state.meals,
    [day]: {
      ...state.meals[day],
      [meal]: ''
    }
  },
  ingredients: state.ingredients.filter(isNot('key', `${day}-${meal}`))
})

const removeIngredient = (state: State, { ingredient }: Record<string, string>): State => ({
  ...state,
  ingredients: state.ingredients.filter(isNot('ingredient', ingredient))
})

const reset = (): State => initState

const def = (state: State): State => state

const actions: Record<string, CallableFunction> = {
  ADD_INGREDIENT: addIngredient,
  CHANGE_TITLE: changeTitle,
  NEW_MEAL: newMeal,
  REMOVE_MEAL: removeMeal,
  REMOVE_INGREDIENT: removeIngredient,
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

const reducer = (state: State = initState, action: Action | undefined = undefined): State => {
  if (!action) return actions.default(state)
  const handler = actions[action.type] || actions.default
  return handler(state, action.payload)
}

export default reducer

import Meals from './Meals'

interface State {
  meals: Record<string, Meals>,
  ingredients: Array<string>,
  newMeal: {
    day: string,
    meal: string,
    dish: string
  }
}

export default State

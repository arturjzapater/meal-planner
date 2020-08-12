import Ingredient from './Ingredient'
import Meals from './Meals'

interface State {
  meals: Record<string, Meals>,
  title: string,
  ingredients: Array<Ingredient>,
}

export default State

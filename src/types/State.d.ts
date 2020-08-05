import Meals from './Meals'

interface State {
  meals: Record<string, Meals>,
  ingredients: Array<string>
}

export default State

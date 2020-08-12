import Meals from './Meals'

interface State {
  meals: Record<string, Meals>,
  title: string,
  ingredients: Array<string>,
}

export default State

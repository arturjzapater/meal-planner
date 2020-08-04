interface Day {
  breakfast: string,
  lunch: string,
  supper: string
}

interface State {
  meals: Record<string, Day>,
  ingredients: Array<string>
}

export default State

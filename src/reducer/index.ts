import { Action, State } from '../types'

const increment = (state: State): State => ({
  ...state,
  count: state.count + 1
})

const decrement = (state: State): State => ({
  ...state,
  count: state.count - 1
})

const def = (state: State): State => state

const actions: Record<string, (state: State) => State> = {
  DECREMENT: decrement,
  INCREMENT: increment,
  default: def
}

const reducer = (state = { count: 0 }, action: Action): State => {
  const handler = actions[action.type] || actions.default
  return handler(state)
}

export default reducer

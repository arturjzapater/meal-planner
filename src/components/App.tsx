import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import actions from '../actions'
import State from '../types/State'

interface App {
  count: number,
  decrement: () => number,
  increment: () => number
}

const App = ({ count, decrement, increment }: App): ReactElement => (
  <div>
    <span>{count}</span>
    <button onClick={increment}>Add</button>
    <button onClick={decrement}>Subtract</button>
  </div>
)

const mapStateToProps = (state: State) => ({ ...state })

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(actions.increment()),
  decrement: () => dispatch(actions.decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

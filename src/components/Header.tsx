import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import State from '../types/State'
import actions from '../actions'

interface HeaderProps {
  reset: (event: React.MouseEvent<HTMLButtonElement> | void) => void,
}

const Header: React.FC<HeaderProps> = ({ reset }) => (
  <header className='bg-purple-600 px-12 py-2 mb-8 flex justify-between'>
    <h2 className='text-white font-serif font-semibold tracking-wide text-2xl'>Weekly Meal Planner</h2>
    <Button text='Reset' onClick={reset} />
  </header>
)

const mapStateToProps = (state: State) => ({ ...state })

const mapDispatchToProps = (dispatch: CallableFunction) => ({
  reset: () => dispatch(actions.reset())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

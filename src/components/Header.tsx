import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import Button from './Button'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'

interface HeaderProps {
  reset: (event: React.MouseEvent<HTMLButtonElement> | void) => void,
}

const Header: React.FC<HeaderProps> = ({ reset }) => (
  <header className='bg-purple-600 px-2 md:px-12 py-2 mb-8 flex justify-between'>
    <h2 className='text-white font-serif font-semibold tracking-wide text-2xl'>Weekly Meal Planner</h2>
    <Button text='Reset' onClick={reset} theme='dark' style='self-center' />
  </header>
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
  reset: () => dispatch(actions.reset())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

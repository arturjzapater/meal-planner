import React from 'react'
import { connect } from 'react-redux'
import Button from './Button'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'
import { Dispatch } from 'redux'

interface IngredientItemProps {
  ingredient: string,
  remove: CallableFunction
}

const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient, remove }) => (
  <article className='flex justify-between'>
    <p>{ingredient}</p>
    <Button onClick={() => remove(ingredient)} text='X' theme='danger' />
  </article>
)

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  remove: (ingredient: string) => dispatch(actions.removeIngredient(ingredient))
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(IngredientItem)

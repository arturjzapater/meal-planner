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
  <article className='flex items-center justify-between bg-purple-100 py-1 px-6'>
    <p>{ingredient}</p>
    <Button onClick={() => remove(ingredient)} text='Remove' theme='danger' />
  </article>
)

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  remove: (ingredient: string) => dispatch(actions.removeIngredient(ingredient))
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(IngredientItem)

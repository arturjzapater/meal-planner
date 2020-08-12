import React from 'react'
import { connect } from 'react-redux'
import Heading from './Heading'
import IngredientItem from './IngredientItem'
import InputForm from './InputForm'
import Ingredient from '../types/Ingredient'
import actions from '../actions'
import mapStateToProps from '../lib/mapStateToProps'
import { map, pipe, prop, sort, uniq } from '../lib/utils'
import { Dispatch } from 'redux'

interface IngredientListProps {
  ingredients: Array<Ingredient>,
  addIngredient: CallableFunction
}

const makeIngredientList = pipe(
  map(prop('ingredient')),
  uniq,
  sort,
  map(x => <IngredientItem key={x} ingredient={x} />)
)

const IngredientList: React.FC<IngredientListProps> = ({ ingredients, addIngredient }) => (
  <section>
    <Heading text='Shopping List' />
    <InputForm label='' submit='Add Ingredient' onSubmit={addIngredient} />
    {makeIngredientList(ingredients)}
  </section>
)

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addIngredient: (ingredient: string) => dispatch(actions.addIngredient(ingredient))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientList)

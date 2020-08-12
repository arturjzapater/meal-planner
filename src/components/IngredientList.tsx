import React from 'react'
import { connect } from 'react-redux'
import Heading from './Heading'
import IngredientItem from './IngredientItem'
import Ingredient from '../types/Ingredient'
import mapStateToProps from '../lib/mapStateToProps'
import { map, pipe, prop, sort, uniq } from '../lib/utils'

interface IngredientListProps {
  ingredients: Array<Ingredient>
}

const makeIngredientList = pipe(
  map(prop('ingredient')),
  uniq,
  sort,
  map(x => <IngredientItem key={x} ingredient={x} />)
)

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => (
  <section>
    <Heading text='Shopping List' />
    {makeIngredientList(ingredients)}
  </section>
)

export default connect(
  mapStateToProps
)(IngredientList)
